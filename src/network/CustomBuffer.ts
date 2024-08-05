export class CustomBuffer {

    protected _buffer: Buffer;
    protected _readOffset: number;
    protected _writeOffset: number;

    constructor(buffer: Buffer = null) {
        this._buffer = buffer ?? Buffer.alloc(0);
        this._readOffset = 0;
        this._writeOffset = 0;
    }

    public get buffer(): Buffer {
        return this._buffer;
    }  

    public get length(): number {
        return this._buffer.length;
    }

    public get byteLength(): number {
        return this._buffer.byteLength;
    }

    public get readOffset(): number {
        return this._readOffset;
    }

    public set readOffset(offset: number) {
        this._readOffset = offset;
    }

    public get writeOffset(): number {
        return this._readOffset;
    }

    public set writeOffset(offset: number) {
        this._readOffset = offset;
    }

    private allocate(size: number): void {
        const buffer = Buffer.alloc(this._buffer.length + size);
        this._buffer.copy(buffer);
        this._buffer = buffer;
    }

    public subarray(start: number, end: number): CustomBuffer {
        return new CustomBuffer(this._buffer.subarray(start, end));
    }

    // READ METHODS

    public readBoolean(): boolean {
        return Boolean(this.readInt8());
    }

    public readByte() {
        return this.readInt8();
    }

    public readUnsignedByte() {
        return this.readUInt8();
    }

    public readInt(): number {
        return this.readInt32BE();
    }

    public readUnsignedInt(): number {
        return this.readUInt32BE();
    }

    public readShort(): number {
        return this.readInt16BE();
    }

    public readUnsignedShort(): number {
        return this.readUInt16BE();
    }

    public readFloat(): number {
        return this.readFloatBE();
    }

    public readDouble(): number {
        return this.readDoubleBE();
    }

    public readLong(): bigint {
        return this.readInt64BE();
    }

    public readUnsignedLong(): bigint {
        return this.readUInt64BE();
    }

    public readUTF(): string {
        const length = this.readUnsignedShort();
        return this.readString(length);
    }

    protected readInt8(): number {
        const value = this._buffer.readInt8(this._readOffset);
        this._readOffset += 1;
        return value;
    }

    protected readUInt8(): number {
        const value = this._buffer.readUInt8(this._readOffset);
        this._readOffset += 1;
        return value;
    }

    protected readInt16BE(): number {
        const value = this._buffer.readInt16BE(this._readOffset);
        this._readOffset += 2;
        return value;
    }

    protected readUInt16BE(): number {
        const value = this._buffer.readUInt16BE(this._readOffset);
        this._readOffset += 2;
        return value;
    }

    protected readInt32BE(): number {
        const value = this._buffer.readInt32BE(this._readOffset);
        this._readOffset += 4;
        return value;
    }

    protected readUInt32BE(): number {
        const value = this._buffer.readUInt32BE(this._readOffset);
        this._readOffset += 4;
        return value;
    }

    protected readInt64BE(): bigint {
        const value = this._buffer.readBigInt64BE(this._readOffset);
        this._readOffset += 8;
        return value;
    }

    protected readUInt64BE(): bigint {
        const value = this._buffer.readBigUInt64BE(this._readOffset);
        this._readOffset += 8;
        return value;
    }

    protected readFloatBE(): number {
        const value = this._buffer.readFloatBE(this._readOffset);
        this._readOffset += 4;
        return value;
    }

    protected readDoubleBE(): number {
        const value = this._buffer.readDoubleBE(this._readOffset);
        this._readOffset += 8;
        return value;
    }

    protected readString(length: number, encoding: BufferEncoding = "utf-8"): string {
        const value = this._buffer.toString(encoding, this._readOffset, this._readOffset + length);
        this._readOffset += length;
        return value;
    }

    // WRITE METHODS

    public writeBoolean(value: boolean): void {
        this.writeInt8(Number(value));
    }

    public writeByte(value: number): void {
        this.writeInt8(value);
    }

    public writeUnsignedByte(value: number): void {
        this.writeUInt8(value);
    }

    public writeInt(value: number): void {
        this.writeInt32BE(value);
    }

    public writeUnsignedInt(value: number): void {
        this.writeUInt32BE(value);
    }

    public writeShort(value: number): void {
        this.writeInt16BE(value);
    }

    public writeUnsignedShort(value: number): void {
        this.writeUInt16BE(value);
    }

    public writeFloat(value: number): void {
        this.writeFloatBE(value);
    }

    public writeDouble(value: number): void {
        this.writeDoubleBE(value);
    }

    public writeLong(value: bigint): void {
        this.writeInt64BE(value);
    }

    public writeUnsignedLong(value: bigint): void {
        this.writeUInt64BE(value);
    }

    public writeUTF(value: string): void {
        this.writeUnsignedShort(value.length);
        this.writeString(value);
    }

    protected writeInt8(value: number): void {
        this.allocate(1);
        this._buffer.writeInt8(value, this._writeOffset);
        this._writeOffset += 1;
    }

    protected writeUInt8(value: number): void {
        this.allocate(1);
        this._buffer.writeUInt8(value, this._writeOffset);
        this._writeOffset += 1;
    }

    protected writeInt16BE(value: number): void {
        this.allocate(2);
        this._buffer.writeInt16BE(value, this._writeOffset);
        this._writeOffset += 2;
    }

    protected writeUInt16BE(value: number): void {
        this.allocate(2);
        this._buffer.writeUInt16BE(value, this._writeOffset);
        this._writeOffset += 2;
    }

    protected writeInt32BE(value: number): void {
        this.allocate(4);
        this._buffer.writeInt32BE(value, this._writeOffset);
        this._writeOffset += 4;
    }

    protected writeUInt32BE(value: number): void {
        this.allocate(4);
        this._buffer.writeUInt32BE(value, this._writeOffset);
        this._writeOffset += 4;
    }

    protected writeInt64BE(value: bigint): void {
        this.allocate(8);
        this._buffer.writeBigInt64BE(value, this._writeOffset);
        this._writeOffset += 8;
    }

    protected writeUInt64BE(value: bigint): void {
        this.allocate(8);
        this._buffer.writeBigUInt64BE(value, this._writeOffset);
        this._writeOffset += 8;
    }

    protected writeFloatBE(value: number): void {
        this.allocate(4);
        this._buffer.writeFloatBE(value, this._writeOffset);
        this._writeOffset += 4;
    }

    protected writeDoubleBE(value: number): void {
        this.allocate(8);
        this._buffer.writeDoubleBE(value, this._writeOffset);
        this._writeOffset += 8;
    }

    protected writeString(value: string, encoding: BufferEncoding = "utf-8"): void {
        this.allocate(value.length);
        this._buffer.write(value, this._writeOffset, value.length, encoding);
        this._writeOffset += value.length;
    }

}