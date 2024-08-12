import { parentPort } from "worker_threads";
import { PacketHandler } from "./network/packet/PacketHandler";
import { Robot } from "./robot/Robot";
import { MainWorkerNetworkMessage, ThreadWorkerNetworkMessage, WorkerMessage, WorkerMessageType } from "./worker/WorkerMessage";

Robot.initialize(parentPort);
let packetHandler = new PacketHandler();

parentPort.on("close", () => {
    console.log("Worker -> parentPort close");
});

parentPort.on("message", (message: WorkerMessage) => {

    if (message.type === WorkerMessageType.NETWORK_MAIN) {

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

    } else {
        throw new Error("Worker -> unknown message type");
    }

});