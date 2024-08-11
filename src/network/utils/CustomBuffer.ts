import { IDataInput } from "./IDataInput";
import { IDataOutput } from "./IDataOutput";

export class CustomBuffer implements IDataInput, IDataOutput {

    protected static readonly BYTE_LENGTH: number = 8;
    protected static readonly SHORT_LENGTH: number = 16;
    protected static readonly INT_LENGTH: number = 32;
    protected static readonly LONG_LENGTH: bigint = 64n;
    protected static readonly FLOAT_LENGTH: number = 32;
    protected static readonly DOUBLE_LENGTH: number = 64;

    protected static readonly BYTE_MIN_SIZE: number = -128;
    protected static readonly BYTE_MAX_SIZE: number = 127;

    protected static readonly BYTE_UNSIGNED_MIN_SIZE: number = 0;
    protected static readonly BYTE_UNSIGNED_MAX_SIZE: number = 255;

    protected static readonly SHORT_MIN_SIZE: number = -32768;
    protected static readonly SHORT_MAX_SIZE: number = 32767;

    protected static readonly SHORT_UNSIGNED_MIN_SIZE: number = 0;
    protected static readonly SHORT_UNSIGNED_MAX_SIZE: number = 65535;

    protected static readonly INT_MIN_SIZE: number = -2147483648;
    protected static readonly INT_MAX_SIZE: number = 2147483647;

    protected static readonly INT_UNSIGNED_MIN_SIZE: number = 0;
    protected static readonly INT_UNSIGNED_MAX_SIZE: number = 4294967295;

    protected static readonly LONG_MIN_SIZE: bigint = -9223372036854775808n;
    protected static readonly LONG_MAX_SIZE: bigint = 9223372036854775807n;

    protected static readonly LONG_UNSIGNED_MIN_SIZE: bigint = 0n;
    protected static readonly LONG_UNSIGNED_MAX_SIZE: bigint = 18446744073709551615n;

    protected static readonly FLOAT_MIN_SIZE: number = -3.4028234663852886e+38;
    protected static readonly FLOAT_MAX_SIZE: number = 3.4028234663852886e+38;

    protected static readonly DOUBLE_MIN_SIZE: number = -1.7976931348623157e+308;
    protected static readonly DOUBLE_MAX_SIZE: number = 1.7976931348623157e+308;

    protected _buffer: Buffer;
    protected _readOffset: number;
    protected _writeOffset: number;

    constructor(buffer?: Buffer) {
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

    public canRead(size: number): boolean {
        return this._buffer.length - this._readOffset >= size;
    }

    public subarray(start?: number, end?: number): IDataInput {
        return new CustomBuffer(this._buffer.subarray(start, end));
    }
    
    private allocate(size: number): void {
        const buffer = Buffer.alloc(this._buffer.length + size);
        this._buffer.copy(buffer);
        this._buffer = buffer;
    }

    // READ METHODS

    public readBoolean(): boolean {
        return Boolean(this.readInt8());
    }

    public readByte(): number {
        let value = this.readInt8();
        if (value < CustomBuffer.BYTE_MIN_SIZE || value > CustomBuffer.BYTE_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readUnsignedByte(): number {
        let value = this.readUInt8();
        if (value < CustomBuffer.BYTE_UNSIGNED_MIN_SIZE || value > CustomBuffer.BYTE_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readInt(): number {
        let value = this.readInt32BE();
        if (value < CustomBuffer.INT_MIN_SIZE || value > CustomBuffer.INT_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readUnsignedInt(): number {
        let value = this.readUInt32BE();
        if (value < CustomBuffer.INT_UNSIGNED_MIN_SIZE || value > CustomBuffer.INT_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readShort(): number {
        let value = this.readInt16BE();
        if (value < CustomBuffer.SHORT_MIN_SIZE || value > CustomBuffer.SHORT_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readUnsignedShort(): number {
        let value = this.readUInt16BE();
        if (value < CustomBuffer.SHORT_UNSIGNED_MIN_SIZE || value > CustomBuffer.SHORT_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readFloat(): number {
        let value = this.readFloatBE();
        if (value < CustomBuffer.FLOAT_MIN_SIZE || value > CustomBuffer.FLOAT_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readDouble(): number {
        let value = this.readDoubleBE();
        if (value < CustomBuffer.DOUBLE_MIN_SIZE || value > CustomBuffer.DOUBLE_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        return value;
    }

    public readUTF(): string {
        const length = this.readUnsignedShort();
        return this.readString(length, "utf-8");
    }

    public readBytes(buffer: Buffer, offset: number = 0, length: number = 0): void {
        if (length === 0) {
            length = buffer.length - offset;
        }
        this._buffer = buffer.subarray(offset, offset + length);
    }

    public readMultiByte(length: number, charset: BufferEncoding = "utf-8"): string {
        const bytes = this._buffer.subarray(this._readOffset, this._readOffset + length);
        this._readOffset += length;
        return bytes.toString(charset);
    }

    public readUTFBytes(length: number): string {
        return this.readMultiByte(length, "utf-8");
    }

    public readObject(): any {
        const length = this.readInt();
        const json = this.readMultiByte(length, "utf-8");
        return JSON.parse(json);
    }

    // PROTECTED READ METHODS

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
        if (value < CustomBuffer.BYTE_MIN_SIZE || value > CustomBuffer.BYTE_MAX_SIZE) {
            this.writeUnsignedByte(value);
        } else {
            this.writeInt8(value);
        }
    }

    public writeUnsignedByte(value: number): void {
        if (value < CustomBuffer.BYTE_UNSIGNED_MIN_SIZE || value > CustomBuffer.BYTE_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeUInt8(value);
    }

    public writeShort(value: number): void {
        if (value < CustomBuffer.SHORT_MIN_SIZE || value > CustomBuffer.SHORT_MAX_SIZE) {
            this.writeUnsignedShort(value);
        } else {
            this.writeInt16BE(value);
        }
    }

    public writeUnsignedShort(value: number): void {
        if (value < CustomBuffer.SHORT_UNSIGNED_MIN_SIZE || value > CustomBuffer.SHORT_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeUInt16BE(value);
    }

    public writeInt(value: number): void {
        if (value < CustomBuffer.INT_MIN_SIZE || value > CustomBuffer.INT_MAX_SIZE) {
            this.writeUnsignedInt(value);
        } else {
            this.writeInt32BE(value);
        }
    }

    public writeUnsignedInt(value: number): void {
        if (value < CustomBuffer.INT_UNSIGNED_MIN_SIZE || value > CustomBuffer.INT_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeUInt32BE(value);
    }

    public writeFloat(value: number): void {
        if (value < CustomBuffer.FLOAT_MIN_SIZE || value > CustomBuffer.FLOAT_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeFloatBE(value);
    }

    public writeDouble(value: number): void {
        if (value < CustomBuffer.DOUBLE_MIN_SIZE || value > CustomBuffer.DOUBLE_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeDoubleBE(value);
    }

    public writeUTF(value: string): void {
        // Pour les characteres spéciaux encodé sur plusieurs bytes
        let tmp = Buffer.from(value, "utf-8");
        let length = tmp.length;
        this.writeUnsignedShort(length);
        this.writeString(value, length, "utf-8");
    }

    public writeMultiByte(length: number, charset: BufferEncoding = "utf-8"): string {
        throw new Error("Method not implemented.");
    }

    public writeUTFBytes(length: number): string {
        throw new Error("Method not implemented.");
    }

    public writeObject(): any {
        throw new Error("Method not implemented.");
    }

    public writeBytes(buffer: CustomBuffer, offset: number = 0, length: number = 0): void {
        if (length === 0) {
            length = buffer.length - offset;
        }
        this.allocate(length);
        buffer._buffer.copy(this._buffer, this._writeOffset, offset, offset + length);
        this._writeOffset += length;
    }

    // PROTECTED WRITE METHODS

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

    protected writeString(value: string, length: number, encoding: BufferEncoding = "utf-8"): void {
        this.allocate(length);
        this._buffer.write(value, this._writeOffset, length, encoding);
        this._writeOffset += length;
    }

}