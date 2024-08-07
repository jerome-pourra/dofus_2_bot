import { CustomDataWrapper } from "../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { ICustomDataOutput } from "../../com/ankamagames/jerakine/network/ICustomDataOutput";
import { AnkSocketEndpoint } from "../AnkSocket";

export class PacketHeaderEncoder {

    private static readonly BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;

    private _rawOutput: ICustomDataOutput;
    private _endpoint: AnkSocketEndpoint;

    public constructor() { }

    public static encode(id: number, seq: number, content: Buffer, endpoint: AnkSocketEndpoint): Buffer {

        let self = new PacketHeaderEncoder();
        self._rawOutput = new CustomDataWrapper();
        self._endpoint = endpoint;

        let size = content.length;
        let sos = self.computeSos(size);
        let head = self.computeHead(id, sos);

        self.encodeHead(head);
        self.encodeSeq(seq);
        self.encodeSize(size, sos);

        return Buffer.concat([self._rawOutput.buffer, content]);

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

    private encodeHead(head: number): void {
        this._rawOutput.writeUnsignedShort(head);
    }

    private encodeSeq(seq: number): void {
        if (this._endpoint === AnkSocketEndpoint.SERVER) {
            this._rawOutput.writeUnsignedInt(seq);
        }
    }

    private encodeSize(len: number, sos: number): void {
        switch (sos) {
            case 0:
                break;
            case 1:
                this._rawOutput.writeUnsignedByte(len);
                break;
            case 2:
                this._rawOutput.writeUnsignedShort(len);
                break;
            case 3:
                let high = len >> 16 & 255;
                let low = len & 65535;
                this._rawOutput.writeUnsignedByte(high);
                this._rawOutput.writeUnsignedShort(low);
                break;
            default:
                throw new Error("PacketHeaderDecoder.encodeSize() -> invalid size of size " + sos + " bytes");
        }
    }

}