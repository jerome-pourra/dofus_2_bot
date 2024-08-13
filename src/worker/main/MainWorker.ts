import { Socket } from "net";
import { Worker } from "worker_threads";
import { config } from "../../config";
import { AnkClient } from "../../network/AnkClient";
import { AnkServer } from "../../network/AnkServer";
import { AnkSocketEndpoint } from "../../network/AnkSocket";
import { ThreadWorkerMessage, ThreadWorkerMessageType, ThreadWorkerNetworkProcessMessage, ThreadWorkerNetworkRobotMessage, ThreadWorkerTerminateMessage } from "../thread/ThreadWorkerMessages";
import { MainWorkerInitializeMessage, MainWorkerMessageType, MainWorkerNetworkProcessMessage, MainWorkerTerminateMessage } from "./MainWorkerMessages";

export class MainWorker {

    private static WORKERS_PID: Map<number, ThreadWorkerTerminateMessage> = new Map<number, ThreadWorkerTerminateMessage>();

    public worker: Worker;
    public ankClient: AnkClient;
    public ankServer: AnkServer;
    public processPid: number;

    constructor(socketClient: Socket) {

        this.worker = new Worker(config.worker.script);
        this.ankClient = new AnkClient(this, socketClient);
        this.ankServer = new AnkServer(this);
        this.processPid = null;

        this.worker.on("online", () => {
            // console.log("MainWorker() -> new thread worker online");
            this.postInitializationMessage();
        })

        this.worker.on("error", (error: Error) => {
            console.error("MainWorker() -> thread worker error: ", error);
        });

        this.worker.on("exit", (code: number) => {
            console.log("MainWorker() -> thread worker exit with code " + code);
            this.ankClient.end();
            this.ankServer.end();
        });

        this.worker.on("message", (message: ThreadWorkerMessage) => {
            this.onThreadWorkerMessage(message);
        });

        this.setupCommunication();

    }

    private setupCommunication(): void {
        this.ankClient.attachEvent("close", () => this.ankServer.end());
        this.ankClient.attachEvent("data", (data: Buffer) => {
            this.ankClient.hookRecv(data, (host: string, port: number) => {
                this.ankServer.connect(host, port);
                this.ankServer.attachEvent("close", () => this.ankClient.end());
            }, (pid: number) => {
                this.setGameInstancePid(pid);
            });
        });
    }

    private setGameInstancePid(pid: number) {
        // console.log("MainWorker.addWorkerPid() -> new worker pid: " + pid);
        this.processPid = pid;
    }

    private onThreadWorkerMessage(message: ThreadWorkerMessage): void {
        switch (message.type) {
            case ThreadWorkerMessageType.TERMINATE:
                this.onTerminateMessage(message as ThreadWorkerTerminateMessage);
                break;
            case ThreadWorkerMessageType.NETWORK_ROBOT:
                this.onNetworkRobotMessage(message as ThreadWorkerNetworkRobotMessage);
                break;
            case ThreadWorkerMessageType.NETWORK_PROCESS:
                this.onNetworkProcessMessage(message as ThreadWorkerNetworkProcessMessage);
                break;
            default:
                throw new Error("MainWorker.onThreadWorkerMessage() -> unknown message type " + message.type);
        }
    }

    private onTerminateMessage(message: ThreadWorkerTerminateMessage): void {
        // console.log("MainWorker.onTerminateMessage() -> thread termination with sequence: " + message.sequence);
        MainWorker.WORKERS_PID.set(this.processPid, message);
    }

    private onNetworkRobotMessage(message: ThreadWorkerNetworkRobotMessage): void {

        let { raw, endpoint } = message;
        let buffer = Buffer.from(raw, "hex");

        switch (endpoint) {
            case AnkSocketEndpoint.CLIENT:
                this.ankClient.send(buffer);
                break;
            case AnkSocketEndpoint.SERVER:
                this.ankServer.send(buffer);
                break;
        }
    }

    private onNetworkProcessMessage(message: ThreadWorkerNetworkProcessMessage): void {

        let { queue, endpoint, treatments } = message;
        let bufferQueue = queue.map(data => Buffer.from(data, "hex"));

        switch (endpoint) {
            case AnkSocketEndpoint.CLIENT:
                this.ankClient.multiSend(bufferQueue);
                this.ankServer.treated(treatments);
                break;
            case AnkSocketEndpoint.SERVER:
                this.ankServer.multiSend(bufferQueue);
                this.ankClient.treated(treatments);
                break;
        }
    }

    public postNetworkProcessMessage(raw: string, endpoint: AnkSocketEndpoint): void {
        const message: MainWorkerNetworkProcessMessage = {
            type: MainWorkerMessageType.NETWORK_PROCESS,
            raw: raw,
            endpoint: endpoint,
            timestamp: Date.now()
        };
        this.worker.postMessage(message);
    }

    public postInitializationMessage(): void {
        const message: MainWorkerInitializeMessage = {
            type: MainWorkerMessageType.INITIALIZE,
            timestamp: Date.now(),
            sequence: MainWorker.WORKERS_PID.get(this.processPid)?.sequence ?? 0
        };
        this.worker.postMessage(message);
    }

    public postTerminateMessage(): void {
        const message: MainWorkerTerminateMessage = {
            type: MainWorkerMessageType.TERMINATE,
            timestamp: Date.now()
        };
        this.worker.postMessage(message);
    }

    public terminate(): void {
        this.worker.terminate();
    }

}