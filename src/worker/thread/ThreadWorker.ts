import { MessagePort } from "worker_threads";
import { MainWorkerInitializeMessage, MainWorkerMessage, MainWorkerMessageType, MainWorkerNetworkProcessMessage, MainWorkerTerminateMessage } from "../main/MainWorkerMessages";
import { NetworkMessage } from "../../com/ankamagames/jerakine/network/NetworkMessage";
import { ThreadWorkerMessageType, ThreadWorkerNetworkProcessMessage, ThreadWorkerNetworkRobotMessage, ThreadWorkerTerminateMessage } from "./ThreadWorkerMessages";
import { AnkSocketEndpoint } from "../../network/AnkSocket";
import { PacketHandler } from "../../network/packet/PacketHandler";

export class ThreadWorker {

    public worker: MessagePort;
    private _packetHandler: PacketHandler;

    constructor(worker: MessagePort) {
        this.worker = worker;
        this._packetHandler = new PacketHandler();
    }

    public run(): this {
        this.worker.on("message", (message: any) => {
            this.onMainWorkerMessage(message);
        });
        return this;
    }

    private onMainWorkerMessage(message: MainWorkerMessage): void {
        switch (message.type) {
            case MainWorkerMessageType.INITIALIZE:
                this.onInitializeMessage(message as MainWorkerInitializeMessage);
                break;
            case MainWorkerMessageType.TERMINATE:
                this.onTerminateMessage(message as MainWorkerTerminateMessage);
                break;
            case MainWorkerMessageType.NETWORK_PROCESS:
                this.onNetworkProcessMessage(message as MainWorkerNetworkProcessMessage);
                break;
            default:
                throw new Error("ThreadWorker.onMainWorkerMessage() -> unknown message type " + message.type);
        }
    }

    private onInitializeMessage(message: MainWorkerInitializeMessage): void {
        console.log("ThreadWorker.onInitializeMessage() -> initialization with sequence: " + message.sequence);
        NetworkMessage.setGlobalInstanceId(message.sequence);
    }

    private onTerminateMessage(message: MainWorkerTerminateMessage): void {
        console.log("ThreadWorker.onTerminateMessage() -> termination");
        this.postTerminateMessage();
        process.exit(0);
    }

    private onNetworkProcessMessage(message: MainWorkerNetworkProcessMessage): void {

        console.log("ThreadWorker.onNetworkProcessMessage() -> network process");

        let { raw, endpoint } = message;
        let data = Buffer.from(raw, "hex");

        let acquisition = this._packetHandler.acquisition(data, endpoint);

        if (acquisition) {
            let { queue, treatments } = acquisition;
            this.postNetworkProcessMessage(queue.map(packet => packet.toString("hex")), endpoint, treatments);
        }

    }

    public postNetworkProcessMessage(queue: Array<string>, endpoint: AnkSocketEndpoint, treatments: number): void {
        const message: ThreadWorkerNetworkProcessMessage = {
            type: ThreadWorkerMessageType.NETWORK_PROCESS,
            timestamp: Date.now(),
            queue: queue,
            endpoint: endpoint,
            treatments: treatments
        };
        this.worker.postMessage(message);
    }

    public postNetworkRobotMessage(raw: string, endpoint: AnkSocketEndpoint): void {
        const message: ThreadWorkerNetworkRobotMessage = {
            type: ThreadWorkerMessageType.NETWORK_ROBOT,
            timestamp: Date.now(),
            raw: raw,
            endpoint: endpoint
        };
        this.worker.postMessage(message);
    }

    public postTerminateMessage(): void {
        const message: ThreadWorkerTerminateMessage = {
            type: ThreadWorkerMessageType.TERMINATE,
            timestamp: Date.now(),
            sequence: NetworkMessage.getGlobalInstanceId()
        };
        this.worker.postMessage(message);
    }

}