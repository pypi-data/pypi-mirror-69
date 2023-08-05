import glob
import sys
import pandas as pd

from ..common.type import Mode

from pydomo.datasets import DataSetClient
from pydomo.datasets import DataSetRequest
from pydomo.streams import CreateStreamRequest

from concurrent.futures import ThreadPoolExecutor
from concurrent.futures import as_completed

from tqdm import tqdm

class DomoAPI(object):
    def __init__(self, logger, domo, **kwargs):
        self.logger = logger
        self.domo = domo
        self.datasets = domo.datasets
        self.streams = domo.streams
        self.stream = kwargs["stream"] if "stream" in kwargs else None
        self.execution = kwargs["execution"] if "execution" in kwargs else None

    def create_dataset(self, schema, name, description):
        dsr = DataSetRequest()
        dsr.name = name
        dsr.description = description
        dsr.schema = schema
        return dsr

    def get_dataset(self, dataset_id):
        return self.datasets.get(dataset_id)

    def search_stream(self, dataset_name):
        return self.streams.search("dataSource.name:" + dataset_name)

    def create_stream(self, dsr, update_method):
        sr = CreateStreamRequest(dsr, update_method)
        return self.streams.create(sr)

    def create_execution(self, stream):
        return self.streams.create_execution(stream["id"])

    def download_to_csv_file(self, dataset_id, destination):
        return self.domo.data_export_to_file(dataset_id, destination, True)

    def _upload(self, part_id, data):
        try:
            if self.stream and self.execution:
                self.streams.upload_part(self.stream["id"], self.execution["id"], part_id, data)
            else:
                raise Exception("Please provide Stream ID and Execution ID.")
            return f"Part {part_id} uploaded succesfully to DOMO."
        except Exception as err:
            return f"Part {part_id} upload met with unexpected error: {err}"

    def upload(self, mode, source, columns, np_types, date_columns, total_records, **kwargs):
        try:
            chunk_size = kwargs["chunk_size"] if "chunk_size" in kwargs else 1024
            jobs, results = [], []
            total_files = 1 if kwargs["part"] else len(glob.glob(f"{source}/*.csv"))
            if mode == Mode.PARALLEL:
                with ThreadPoolExecutor() as pool:
                    for i in range(total_files):
                        data = pd.read_csv(
                            "{}/{}.csv".format(source, kwargs["part"] if kwargs["part"] else i + 1),
                            header=0,
                            names=columns,
                            encoding="utf-8",
                            dtype=dict(zip(columns, np_types)),
                            parse_dates=date_columns
                        ).to_csv(index=False, header=False)
                        jobs.append(pool.submit(self._upload, i+1, data))

                    with tqdm(total=total_records, unit="record") as pbar:
                        completed = 0
                        for future in as_completed(jobs):
                            results.append(future.result())
                            if completed + chunk_size >= total_records:
                                pbar.update(total_records - completed)
                            else:
                                completed += chunk_size
                                pbar.update(chunk_size)
                    completed = [1 for result in results if "succesfully" in result]
                    died = [1 for result in results if "error" in result]

                    committed_execution = self.streams.commit_execution(self.stream["id"], self.execution["id"])

                    self.logger.info("Committed execution: {}".format(committed_execution))
                    self.streams.delete(self.stream["id"])

                    return { "messages": results, "n_completed": len(completed), "n_died": len(died) }
            else:
                raise Exception("Mode: {} not supported.".format(mode))
        except Exception:
            self.logger.exception("Unable to parallel upload to Domo")
