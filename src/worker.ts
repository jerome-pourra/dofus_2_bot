import { parentPort } from "worker_threads";
import { PacketHandler } from "./network/packet/PacketHandler";
import { MainMessage, WorkerMessage } from "./worker/WorkerMessage";

let packetHandler = new PacketHandler();

parentPort.on("message", (message: MainMessage) => {

    let { raw, endpoint } = message;
    let data = Buffer.from(raw, "hex");

    let acquisition = packetHandler.acquisition(data, endpoint);

    if (acquisition) {

        let { queue, treatments } = acquisition;
    
        parentPort.postMessage({
            queue: queue.map(packet => packet.toString("hex")),
            endpoint: endpoint,
            timestamp: Date.now(),
            treatments: treatments
        } as WorkerMessage);

    }

});