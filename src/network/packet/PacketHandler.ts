import * as util from "util";
import { AnkSocketEndpoint } from "../AnkSocket";
import { MessageReceiver } from "../com/ankamagames/dofus/network/MessageReceiver";
import { CustomDataWrapper } from "../com/ankamagames/jerakine/network/CustomDataWrapper";
import { PacketHeaderDecoded, PacketHeaderDecoder } from "./PacketHeaderDecoder";
import { PacketHeaderEncoder } from "./PacketHeaderEncoder";
import { NetworkHandler } from "../../bot/network/NetworkHandler";


export class PacketHandler {

    private static SEQUENCE_ID: number = 0;

    private _buffer: Buffer;

    public constructor() {
        this._buffer = Buffer.alloc(0);
    }

    public acquisition(data: Buffer, enpoint: AnkSocketEndpoint) {

        // Append new data to buffer
        this._buffer = Buffer.concat([this._buffer, data]);

        try {

            // Copy buffer to avoid manipulating the original
            let buffer = Buffer.from(this._buffer);
            let encodedQueue: Buffer[] = [];
            let decodedQueue: PacketHeaderDecoded[] = [];

            do {

                let decoded = PacketHeaderDecoder.decode(buffer, enpoint);
                decodedQueue.push(decoded);
                buffer = buffer.subarray(decoded.nextOffset);

            } while (buffer.byteLength > 0);

            for (const decoded of decodedQueue) {
                this.process(decoded);
                let sequence = ++PacketHandler.SEQUENCE_ID;
                let encoded: Buffer = PacketHeaderEncoder.encode(decoded.id, sequence, decoded.content, enpoint);
                encodedQueue.push(encoded);
            }

            this._buffer = buffer;

            // console.log(">>> PacketHandler.acquisition() -> received " + packetCount + " packets");
            // console.log("Encoded: " + packetQueue.map((packet) => packet.toString("hex")).join(" | "));
            return encodedQueue;

        } catch (error) {
            console.error(error.message);
        }

        return null;

    }

    private process(decoded: PacketHeaderDecoded): void {

        let message = MessageReceiver.parse(new CustomDataWrapper(decoded.content), decoded.id, decoded.size);
        // console.log(util.inspect(message, { depth: null, colors: true }));
        NetworkHandler.process(message);

        if (message.constructor.name === "MapComplementaryInformationsDataMessage") {
            console.log(util.inspect(message, { depth: null, colors: true }));
            // console.log("Hello World!");
        }

    }

}