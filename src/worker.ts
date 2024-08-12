import { parentPort } from "worker_threads";
import { PacketHandler } from "./network/packet/PacketHandler";
import { Robot } from "./robot/Robot";
import { MainWorkerNetworkMessage, ThreadWorkerNetworkMessage, WorkerMessage, WorkerMessageType } from "./worker/WorkerMessage";
import { NetworkMessage } from "./com/ankamagames/jerakine/network/NetworkMessage";

Robot.initialize(parentPort);
let packetHandler = new PacketHandler();

parentPort.on("message", (message: WorkerMessage) => {

    switch (message.type) {

        case WorkerMessageType.TERMINATE:

            parentPort.postMessage({
                type: WorkerMessageType.TERMINATE,
                sequence: NetworkMessage.globalInstanceId(),
                timestamp: Date.now()
            });
            process.exit(0);

        case WorkerMessageType.NETWORK_MAIN:

            let { raw, endpoint } = message as MainWorkerNetworkMessage;
            let data = Buffer.from(raw, "hex");

            let acquisition = packetHandler.acquisition(data, endpoint);

            if (acquisition) {

                let { queue, treatments } = acquisition;

                let message: ThreadWorkerNetworkMessage = {
                    type: WorkerMessageType.NETWORK_THREAD,
                    queue: queue.map(packet => packet.toString("hex")),
                    endpoint: endpoint,
                    timestamp: Date.now(),
                    treatments: treatments
                };

                parentPort.postMessage(message);

            }
            break;

        default:
            throw new Error("Worker -> unknown message type");
    }

});