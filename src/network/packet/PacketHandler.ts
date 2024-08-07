import * as util from "util";
import { AnkSocketEndpoint } from "../AnkSocket";
import { PacketHeaderDecoded, PacketHeaderDecoder } from "./PacketHeaderDecoder";
import { PacketHeaderEncoder } from "./PacketHeaderEncoder";
import { NetworkHandler } from "../../bot/network/NetworkHandler";
import { CustomDataWrapper } from "../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { MessageReceiver } from "../../com/ankamagames/dofus/network/MessageReceiver";
import { Logger } from "../../tools/Logger";

export class PacketHandler {

    private static LOG_NETWORK = true;
    private static LOG_UNPACK = true;
    private static SEQUENCE_ID: number = 0;

    private _buffer: Buffer;

    public constructor() {
        this._buffer = Buffer.alloc(0);
    }

    public acquisition(data: Buffer, enpoint: AnkSocketEndpoint): Buffer[] {

        // Append new data to buffer
        this._buffer = Buffer.concat([this._buffer, data]);

        try {

            // Copy buffer to avoid manipulating the original
            let buffer = Buffer.from(this._buffer);
            let encodedQueue: Buffer[] = [];
            let decodedQueue: PacketHeaderDecoded[] = [];

            do {

                let decoded = PacketHeaderDecoder.decode(buffer, enpoint);

                if (PacketHandler.LOG_NETWORK) {
                    switch (enpoint) {
                        case AnkSocketEndpoint.SERVER:
                            Logger.log("[C <green>" + ">>>" + "</green> M] : id:" + "<blue>" + MessageReceiver.getType(decoded.id) + "</blue>" + "@" + decoded.id + " sos:" + decoded.sos + " seq:" + decoded.seq + " size:" + decoded.size + " content:" + decoded.content.toString("hex"));
                            break;
                        case AnkSocketEndpoint.CLIENT:
                            Logger.log("[S <red>" + ">>>" + "</red> M] : id:" + "<blue>" + MessageReceiver.getType(decoded.id) + "</blue>" + "@" + decoded.id + " sos:" + decoded.sos + " size:" + decoded.size + " content:" + decoded.content.toString("hex"));
                            break;
                        default:
                            throw new Error("PacketHandler.acquisition() -> Invalid endpoint");
                    }
                }

                decodedQueue.push(decoded);
                buffer = buffer.subarray(decoded.nextOffset);

            } while (buffer.length > 0);

            for (const decoded of decodedQueue) {
                this.process(decoded);
                let sequence = ++PacketHandler.SEQUENCE_ID;
                let encoded: Buffer = PacketHeaderEncoder.encode(decoded.id, sequence, decoded.content, enpoint);
                encodedQueue.push(encoded);
            }

            this._buffer = buffer;
            return encodedQueue;

        } catch (error) {
            console.error(error.message);
        }

        return null;

    }

    private process(decoded: PacketHeaderDecoded): void {

        let data = new CustomDataWrapper(decoded.content);
        let message = MessageReceiver.parse(data, decoded.id, decoded.size);

        if (data.length !== data.readOffset) {
            console.error("PacketHandler.process() -> data length and read offset mismatch");
        }

        if (PacketHandler.LOG_UNPACK) {
            console.log(util.inspect(message, { depth: null, colors: true }));
        }

        NetworkHandler.process(message);

        // On tentera de rebuild la data ici afin de l'envoyé au destinataire

    }

}