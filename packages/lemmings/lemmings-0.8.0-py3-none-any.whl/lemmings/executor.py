import os
from multiprocessing import Process, Pool

from prometheus_client import multiprocess

from lemmings.worker import Worker
from lemmings.statistics import  Statistics
from lemmings.utils import _num, ProcessStat
from lemmings.utils.const import DONE, FAIL

class TestExecutor:
    def __init__(self, ansi_colors=False, debug=False):
        self.workers = []
        self.ansi_colors = ansi_colors
        self.debug = debug
        self.test_plans = 0

    def add_test_plan(self, task_set, workers=1):
        for a in range(workers):
            self.workers.append(Worker(f"thread{a}", task_set, ansi_colors=self.ansi_colors, debug=self.debug))
        self.test_plans += 1
        return self

    def start_all(self, shared_state):
        """
        :param args: list of shared variables between workers[processes]
        """
        stat = Statistics()
        with Pool(len(self.workers)) as p:
            procs = [Process(target=self.start_process, args=[w, stat, shared_state]) for w in self.workers]
            for p in procs: p.start()
            for p in procs: p.join()
            # pids = p.map(f, self.workers)
            pids = [x.pid for x in procs]
            # print(pids)
            for pid in pids:
                multiprocess.mark_process_dead(pid)
            self.done(stat)

    def start_process(self, worker, stat, shared_state):
        shared_state.init_multiprocess()
        worker.set_statistics(stat)
        worker.set_shared(shared_state)
        id, name = worker.id, worker.name
        task_set = worker.task_set.__class__.__name__
        worker.set_title(f"{task_set} [pid {os.getpid():6d}<:{os.getppid()}]")
        worker.log("start process")
        worker.gc = ProcessStat()
        worker.execute()

    def done(self, stat):
        print(f"merged results: {_num(stat.shared_executed)} {DONE},"
              f" {_num(stat.shared_failed)} {FAIL} "
              f"[{_num(stat.shared_total)} total]")
