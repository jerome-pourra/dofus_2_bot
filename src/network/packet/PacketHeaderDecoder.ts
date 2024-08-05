import { AnkSocketEndpoint } from "../AnkSocket";

export type PacketHeaderDecoded = {
    id: number;
    seq: number;
    sos: number;
    size: number;
    content: Buffer;
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
    private _content: Buffer;
    private _rawPacket: Buffer;
    private _readOffset: number;
    private _endpoint: AnkSocketEndpoint;

    constructor() { }

    public static decode(rawPacket: Buffer, endpoint: AnkSocketEndpoint): PacketHeaderDecoded {

        let self = new PacketHeaderDecoder();
        self._rawPacket = rawPacket ?? Buffer.alloc(0);
        self._endpoint = endpoint;
        self._readOffset = 0;

        self.decodeHead();
        self.decodeSeq();
        self.decodeSize();
        self.decodeContent();

        if (self._endpoint === AnkSocketEndpoint.SERVER) {
            // console.log("[C >>> M] : id:" + self._id + " sos:" + self._sos + " seq:" + self._seq + " size:" + self._size + " content:" + self._content.toString("hex"));
        } else {
            // console.log("[S >>> M] : id:" + self._id + " sos:" + self._sos + " size:" + self._size + " content:" + self._content.toString("hex"));
        }

        return {
            id: self._id,
            seq: self._seq,
            sos: self._sos,
            size: self._size,
            content: self._content,
            nextOffset: self._readOffset
        };

    }

    public get id(): number {
        return this._id;
    }

    public get seq(): number {
        return this._seq;
    }

    public get sos(): number {
        return this._sos;
    }

    public get size(): number {
        return this._size;
    }

    // public get content(): Buffer {
    //     return this._content;
    // }

    public get readOffset(): number {
        return this._readOffset;
    }

    private decodeHead(): void {

        if (!this.canRead(PacketHeaderDecoder.ENCODING_HEAD_LENGTH)) {
            throw new Error("PacketHeaderDecoder.decodeHead() -> packet too short");
        }

        let head = this._rawPacket.readUInt16BE(this._readOffset);
        this._readOffset += PacketHeaderDecoder.ENCODING_HEAD_LENGTH;

        this._id = head >> PacketHeaderDecoder.BIT_RIGHT_SHIFT_LEN_PACKET_ID;
        this._sos = head & 3;

    }

    private decodeSeq(): void {

        if (this._endpoint === AnkSocketEndpoint.SERVER) {

            if (!this.canRead(PacketHeaderDecoder.ENCODING_SEQ_LENGTH)) {
                throw new Error("PacketHeaderDecoder.decodeSeq() -> packet too short");
            }

            this._seq = this._rawPacket.readUInt32BE(this._readOffset);
            this._readOffset += PacketHeaderDecoder.ENCODING_SEQ_LENGTH;

        }

    }

    private decodeSize(): void {

        if (!this.canRead(this._sos)) {
            throw new Error("PacketHeaderDecoder.decodeSize() -> packet too short");
        }

        switch (this._sos) {
            case 0:
                this._size = 0;
                break;
            case 1:
                this._size = this._rawPacket.readUInt8(this._readOffset);
                this._readOffset += 1;
                break;
            case 2:
                this._size = this._rawPacket.readUInt16BE(this._readOffset);
                this._readOffset += 2;
                break;
            case 3:
                this._size = this._rawPacket.readUInt32BE(this._readOffset);
                this._readOffset += 4;
                break
            default:
                throw new Error("PacketHeaderDecoder.decodeSize() -> invalid size of size " + this._sos + " bytes");
        }

        // this._readOffset += this._sos;

    }

    private decodeContent(): void {

        if (!this.canRead(this._size)) {
            throw new Error("PacketHeaderDecoder.decodeContent() -> packet too short");
        }

        this._content = this._rawPacket.subarray(this._readOffset, this._size + this._readOffset);
        this._readOffset += this._size;

    }

    private canRead(size: number): boolean {
        return this.bufferLeft() >= size;
    }

    private bufferLeft(): number {
        return this._rawPacket.byteLength - this._readOffset;
    }

}