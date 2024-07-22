export class DataWrapper {

    private static readonly SIZE_OF_BYTE = 1;
    private static readonly SIZE_OF_SHORT = 2;
    private static readonly SIZE_OF_INT = 4;

    private static readonly INT_SIZE: number = 32;
    private static readonly SHORT_SIZE: number = 16;
    private static readonly SHORT_MIN_VALUE: number = -32768;
    private static readonly SHORT_MAX_VALUE: number = 32767;
    private static readonly UNSIGNED_SHORT_MAX_VALUE: number = 65536;
    private static readonly CHUNCK_BIT_SIZE: number = 7;
    private static readonly MAX_ENCODING_LENGTH: number = Math.ceil(DataWrapper.INT_SIZE / DataWrapper.CHUNCK_BIT_SIZE);
    private static readonly MASK_10000000: number = 128;
    private static readonly MASK_01111111: number = 127;

    private offset: number = 0;
    protected packet: Buffer;

    constructor(packet: Buffer) {
        this.packet = Buffer.from(packet);
    }

    public finalPacket(size: number) {
        this.packet = this.packet.subarray(this.offset, this.offset + size);
    }

    public finalSize(size: number) {
        return this.offset + size;
    }

    public readByte() {
        return this.readSigned(DataWrapper.SIZE_OF_BYTE);
    }

    public readUnsignedByte() {
        return this.readUnsigned(DataWrapper.SIZE_OF_BYTE);
    }

    public readShort() {
        return this.readSigned(DataWrapper.SIZE_OF_SHORT);
    }

    public readUnsignedShort() {
        return this.readUnsigned(DataWrapper.SIZE_OF_SHORT);
    }

    public readInt() {
        return this.readSigned(DataWrapper.SIZE_OF_INT);
    }

    public readUnsignedInt() {
        return this.readUnsigned(DataWrapper.SIZE_OF_INT);
    }

    private readSigned(size: number) {
        let result = this.packet.readIntBE(this.offset, size);
        this.offset += size;
        return result;
    }

    private readUnsigned(size: number) {
        let result = this.packet.readUIntBE(this.offset, size);
        this.offset += size;
        return result;
    }

}