import { parentPort } from "worker_threads";
import { Robot } from "./robot/Robot";
import { ThreadWorker } from "./worker/thread/ThreadWorker";

const worker = new ThreadWorker(parentPort).run();
Robot.initialize(worker);