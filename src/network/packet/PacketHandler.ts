import * as util from "util";
import { AnkSocketEndpoint } from "../AnkSocket";
import { PacketHeaderDecoded, PacketHeaderDecoder } from "./PacketHeaderDecoder";
import { CustomDataWrapper } from "../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { MessageReceiver } from "../../com/ankamagames/dofus/network/MessageReceiver";
import { Logger } from "../../tools/Logger";
import { ICustomDataInput } from "../../com/ankamagames/jerakine/network/ICustomDataInput";
import { NetworkMessage } from "../../com/ankamagames/jerakine/network/NetworkMessage";
import { NetworkMessageWrapper } from "./NetworkMessageWrapper";
import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkHandler } from "../../bot/network/NetworkHandler";
import { PacketHeaderEncoder } from "./PacketHeaderEncoder";

export class PacketHandler {

    private static LOG_NETWORK = true;
    private static LOG_NETWORK_MITM = true;
    private static LOG_UNPACK = false;

    private _buffer: Buffer;

    public constructor() {
        this._buffer = Buffer.alloc(0);
    }

    public acquisition(data: Buffer, enpoint: AnkSocketEndpoint, increaseSeq: boolean = true): Buffer[] {

        // Append new data to buffer
        this._buffer = Buffer.concat([this._buffer, data]);

        try {

            // Copy buffer to avoid manipulating the original
            let buffer = Buffer.from(this._buffer);
            let encodedQueue: Buffer[] = [];
            let decodedQueue: PacketHeaderDecoded[] = [];
            let messagesQueue: NetworkMessageWrapper[] = [];

            do {

                let input = new CustomDataWrapper(buffer);
                let decoded = PacketHeaderDecoder.decode(input, enpoint);

                if (PacketHandler.LOG_NETWORK) {
                    switch (enpoint) {
                        case AnkSocketEndpoint.SERVER:
                            Logger.log("[C " + "<green>" + ">>>" + "</green>" + " M] : id:" + decoded.id + " name:" + "<blue>" + MessageReceiver.getType(decoded.id) + "</blue>" + " sos:" + decoded.sos + " seq:" + decoded.seq + " size:" + decoded.size + " content:" + this.truncateContent(decoded.content.buffer.toString("hex")));
                            break;
                        case AnkSocketEndpoint.CLIENT:
                            Logger.log("[S " + "<red>" + ">>>" + "</red>" + " M] : id:" + decoded.id + " name:" + "<blue>" + MessageReceiver.getType(decoded.id) + "</blue>" + " sos:" + decoded.sos + " size:" + decoded.size + " content:" + this.truncateContent(decoded.content.buffer.toString("hex")));
                            break;
                        default:
                            throw new Error("PacketHandler.acquisition() -> Invalid endpoint");
                    }
                }

                decodedQueue.push(decoded);
                // console.log(buffer.toString("hex"));
                buffer = buffer.subarray(decoded.nextOffset);

            } while (buffer.length > 0);

            for (const decoded of decodedQueue) {

                let networkMessage = this.parseMessage(decoded.content, decoded.id, decoded.size);
                let networkMessageWrapper = new NetworkMessageWrapper(
                    decoded.id,
                    networkMessage.getInstanceId(),
                    enpoint,
                    networkMessage
                );

                messagesQueue.push(networkMessageWrapper);

                // MessageReceiver.parse(input, decoded.id, decoded.size);

                // this.process(decoded);
                // let sequence = 1; // parsedMessage.getInstanceId();
                // if (increaseSeq) {
                //     sequence = ++PacketHandler.SEQUENCE_ID;
                // }
                let encoded: Buffer = PacketHeaderEncoder.encode(decoded.id, networkMessage.getInstanceId(), decoded.content.buffer, enpoint);
                encodedQueue.push(encoded);
            }

            // for (const message of messagesQueue) {

            //     NetworkHandler.process(message);

            //     let buffer = new CustomDataWrapper();
            //     message.networkMessage.pack(buffer);
            //     console.log(buffer.buffer.toString("hex"));
                

            //     // let encoded: Buffer = PacketHeaderEncoder.encode(message.id, message.sequence, message.networkMessage, message.endpoint);
            //     encodedQueue.push(buffer.buffer);

            // }

            this._buffer = buffer;
            return encodedQueue;

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message, error.stack);
            } else {
                console.error("PacketHandler.acquisition() -> unknown error", error);
            }
        }

        return null;

    }

    private truncateContent(str: string, maxLength: number = 32): string {
        return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
    }

    private parseMessage(input: ICustomDataInput, id: number, size: number): INetworkMessage {
        console.log(input.buffer.byteLength, input.readOffset, id, size);
        
        let message = MessageReceiver.parse(input, id, size);
        if (input.length !== input.readOffset) {
            console.error("PacketHandler.parseMessage() -> data length and read offset mismatch");
        }
        if (PacketHandler.LOG_UNPACK) {
            console.log(JSON.stringify(message));
            // console.log(util.inspect(message, { depth: null, colors: true }));
        }
        return message;
    }

    private process(decoded: PacketHeaderDecoded): void {

        let input = decoded.content;
        let message = MessageReceiver.parse(input, decoded.id, decoded.size);

        if (input.length !== input.readOffset) {
            console.error("PacketHandler.process() -> data length and read offset mismatch");
        }

        if (PacketHandler.LOG_UNPACK) {
            console.log(JSON.stringify(message));
            // console.log(util.inspect(message, { depth: null, colors: true }));
        }

        // NetworkHandler.process(message);

    }

}