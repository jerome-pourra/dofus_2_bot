import { ICustomDataInput } from "../../com/ankamagames/jerakine/network/ICustomDataInput";
import { AnkSocketEndpoint } from "../AnkSocket";
import { PacketTooShortError } from "./PacketTooShortError";

export type PacketHeaderDecoded = {
    id: number;
    seq: number;
    sos: number;
    size: number;
    content: ICustomDataInput;
    nextOffset: number;
}

export class PacketHeaderDecoder {

    private static readonly BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;
    private static readonly ENCODING_HEAD_LENGTH: number = 2;
    private static readonly ENCODING_SEQ_LENGTH: number = 4;

    private _id: number;
    private _seq: number;
    private _sos: number;
    private _size: number;
    private _content: ICustomDataInput;

    private _rawInput: ICustomDataInput;
    private _endpoint: AnkSocketEndpoint;

    constructor() { }

    public static decode(input: ICustomDataInput, endpoint: AnkSocketEndpoint): PacketHeaderDecoded {

        let self = new PacketHeaderDecoder();
        self._rawInput = input;
        self._endpoint = endpoint;

        self.decodeHead();
        self.decodeSeq();
        self.decodeSize();
        self.decodeContent();

        return {
            id: self._id,
            seq: self._seq,
            sos: self._sos,
            size: self._size,
            content: self._content,
            nextOffset: self._rawInput.readOffset
        };

    }

    private decodeHead(): void {

        if (!this._rawInput.canRead(PacketHeaderDecoder.ENCODING_HEAD_LENGTH)) {
            throw new PacketTooShortError("PacketHeaderDecoder.decodeHead() -> packet too short");
        }

        let head = this._rawInput.readUnsignedShort();
        this._id = head >> PacketHeaderDecoder.BIT_RIGHT_SHIFT_LEN_PACKET_ID;
        this._sos = head & 3;

    }

    private decodeSeq(): void {

        if (this._endpoint === AnkSocketEndpoint.SERVER) {

            if (!this._rawInput.canRead(PacketHeaderDecoder.ENCODING_SEQ_LENGTH)) {
                throw new PacketTooShortError("PacketHeaderDecoder.decodeSeq() -> packet too short");
            }

            this._seq = this._rawInput.readUnsignedInt();

        }

    }

    private decodeSize(): void {

        if (!this._rawInput.canRead(this._sos)) {
            throw new PacketTooShortError("PacketHeaderDecoder.decodeSize() -> packet too short");
        }

        switch (this._sos) {
            case 0:
                this._size = 0;
                break;
            case 1:
                this._size = this._rawInput.readUnsignedByte();
                break;
            case 2:
                this._size = this._rawInput.readUnsignedShort();
                break;
            case 3:
                this._size = ((this._rawInput.readUnsignedByte() & 255) << 16) + ((this._rawInput.readUnsignedByte() & 255) << 8) + (this._rawInput.readUnsignedByte() & 255);
                break
            default:
                throw new Error("PacketHeaderDecoder.decodeSize() -> invalid size of size " + this._sos + " bytes");
        }

    }

    private decodeContent(): void {

        if (!this._rawInput.canRead(this._size)) {
            throw new Error("PacketHeaderDecoder.decodeContent() -> packet too short");
        }

        let start = this._rawInput.readOffset;
        let end = start + this._size;

        // TODO C'est moche de set le offset ici !
        this._rawInput.readOffset += this._size;
        this._content = this._rawInput.subarray(start, end);

    }

}