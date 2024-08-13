import { parentPort } from "worker_threads";
import { PacketHandler } from "./network/packet/PacketHandler";
import { Robot } from "./robot/Robot";
import { NetworkMessage } from "./com/ankamagames/jerakine/network/NetworkMessage";
import { MainWorkerMessage, MainWorkerMessageType, MainWorkerNetworkProcessMessage } from "./worker/main/MainWorkerMessages";
import { ThreadWorkerMessageType, ThreadWorkerNetworkProcessMessage } from "./worker/thread/ThreadWorkerMessages";

Robot.initialize(parentPort);
let packetHandler = new PacketHandler();

parentPort.on("message", (message: MainWorkerMessage) => {

    switch (message.type) {

        case MainWorkerMessageType.TERMINATE:

            parentPort.postMessage({
                type: ThreadWorkerMessageType.TERMINATE,
                // sequence: NetworkMessage.globalInstanceId(),
                timestamp: Date.now()
            });
            process.exit(0);

        case MainWorkerMessageType.NETWORK_PROCESS:

            let { raw, endpoint } = message as MainWorkerNetworkProcessMessage;
            let data = Buffer.from(raw, "hex");

            let acquisition = packetHandler.acquisition(data, endpoint);

            if (acquisition) {

                let { queue, treatments } = acquisition;

                let message: ThreadWorkerNetworkProcessMessage = {
                    type: ThreadWorkerMessageType.NETWORK_PROCESS,
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