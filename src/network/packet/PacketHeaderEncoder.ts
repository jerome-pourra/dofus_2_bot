import { AnkSocketEndpoint } from "../AnkSocket";

export class PacketHeaderEncoder {

    private static readonly BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;
    private static readonly ENCODING_HEAD_LENGTH: number = 2;
    private static readonly ENCODING_SEQ_LENGTH: number = 4;

    public constructor() { }

    public static encode(id: number, seq: number, content: Buffer, endpoint: AnkSocketEndpoint): Buffer {

        let self = new PacketHeaderEncoder();
        let size = content.byteLength;
        let sos = self.computeSos(size);
        let head = self.computeHead(id, sos);

        let headBuffer = self.encodeHead(head);
        let seqBuffer = self.encodeSeq(seq, endpoint);
        let sizeBuffer = self.encodeSize(size, sos);
        let contentBuffer = content;

        // if (endpoint === AnkSocketEndpoint.SERVER) {
        //     console.log("[S <<< M] : head:" + headBuffer.toString("hex") + " seq:" + seqBuffer.toString("hex") + " size:" + sizeBuffer.toString("hex") + " content:" + content.toString("hex"));
        // } else {
        //     console.log("[S <<< M] : head:" + headBuffer.toString("hex") + " size:" + sizeBuffer.toString("hex") + " content:" + content.toString("hex"));
        // }

        // console.log("Sequence:", seq);
        return Buffer.concat([headBuffer, seqBuffer, sizeBuffer, contentBuffer]);

    }

    private computeHead(msgId: number, len: number): number {
        return msgId << PacketHeaderEncoder.BIT_RIGHT_SHIFT_LEN_PACKET_ID | len;
    }

    private computeSos(len: number): number {
        if (len > 65535) {
            return 3;
        }
        if (len > 255) {
            return 2;
        }
        if (len > 0) {
            return 1;
        }
        return 0;
    }

    private encodeHead(head: number): Buffer {
        let buffer = Buffer.alloc(PacketHeaderEncoder.ENCODING_HEAD_LENGTH);
        buffer.writeUInt16BE(head);
        return buffer;
    }

    private encodeSeq(seq: number, endpoint: AnkSocketEndpoint): Buffer {
        if (endpoint === AnkSocketEndpoint.SERVER) {
            let buffer = Buffer.alloc(PacketHeaderEncoder.ENCODING_SEQ_LENGTH);
            buffer.writeUInt32BE(seq);
            return buffer;
        } else {
            return Buffer.alloc(0);
        }
    }

    private encodeSize(len: number, sos: number): Buffer {
        let buffer = Buffer.alloc(sos);
        switch (sos) {
            case 0:
                break;
            case 1:
                buffer.writeUInt8(len);
                break;
            case 2:
                buffer.writeUInt16BE(len);
                break;
            case 3:
                buffer.writeUIntBE(len, 0, 3);
                break;
            default:
                throw new Error("PacketHeaderDecoder.encodeSize() -> invalid size of size " + sos + " bytes");
        }
        return buffer;
    }

}