import { BufferReader } from "../../../../BufferReader";
import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";
import { ByteArray } from "./utils/types/ByteArray";
import { Int64 } from "./utils/types/Int64";
import { UInt64 } from "./utils/types/UInt64";

export class CustomDataWrapper extends BufferReader implements ICustomDataInput, ICustomDataOutput {

	private static readonly SHORT_SIZE: number = 16;
	private static readonly INT_SIZE: number = 32;
	private static readonly SHORT_MAX_VALUE: number = 32767;
	private static readonly UNSIGNED_SHORT_MAX_VALUE: number = 65536;
	private static readonly CHUNCK_BIT_SIZE: number = 7;
	private static readonly MASK_10000000: number = 128;
	private static readonly MASK_01111111: number = 127;

	// private _data: Buffer;
	// private _offset: number;

	public constructor(data: Buffer = Buffer.alloc(0)) {
        super(data);
		// this._data = data;
        // this._offset = 0;
	}

	public readVarInt(): number {
		var b: number = 0;
		var value: number = 0;
		var offset: number = 0;
		var hasNext: boolean = false;
		while (offset < CustomDataWrapper.INT_SIZE) {
			b = this.readByte();
			hasNext = (b & CustomDataWrapper.MASK_10000000) == CustomDataWrapper.MASK_10000000;
			if (offset > 0) {
				value += (b & CustomDataWrapper.MASK_01111111) << offset;
			}
			else {
				value += b & CustomDataWrapper.MASK_01111111;
			}
			offset += CustomDataWrapper.CHUNCK_BIT_SIZE;
			if (!hasNext) {
				return value;
			}
		}
		throw new Error("Too much data");
	}

	public readVarUhInt(): number {
		return this.readVarInt();
	}

	public readVarShort(): number {
		var b: number = 0;
		var value: number = 0;
		var offset: number = 0;
		var hasNext: boolean = false;
		while (offset < CustomDataWrapper.SHORT_SIZE) {
			b = this.readByte();
			hasNext = (b & CustomDataWrapper.MASK_10000000) == CustomDataWrapper.MASK_10000000;
			if (offset > 0) {
				value += (b & CustomDataWrapper.MASK_01111111) << offset;
			}
			else {
				value += b & CustomDataWrapper.MASK_01111111;
			}
			offset += CustomDataWrapper.CHUNCK_BIT_SIZE;
			if (!hasNext) {
				if (value > CustomDataWrapper.SHORT_MAX_VALUE) {
					value -= CustomDataWrapper.UNSIGNED_SHORT_MAX_VALUE;
				}
				return value;
			}
		}
		throw new Error("Too much data");
	}

	public readVarUhShort(): number {
		return this.readVarShort();
	}

	public readVarLong(): number {
		return Number(this.readInt64(this));
	}

	public readVarUhLong(): number {
		return Number(this.readUInt64(this));
	}

	public readBytes(bytes: Buffer, offset: number = 0, length: number = 0): void {
		bytes.toString("binary", offset, length);
	}

	public readBoolean(): boolean {
		const result = this._data.readInt8(this._offset);
        this._offset += 1;
        return Boolean(result);
	}

	public readByte(): number {
        const result = this._data.readInt8(this._offset);
        this._offset += 1;
        return result;
	}

	public readUnsignedByte(): number {
        const result = this._data.readUInt8(this._offset);
        this._offset += 1;
        return result;
	}

	public readShort(): number {
        const result = this._data.readInt16BE(this._offset);
        this._offset += 2;
        return result;
	}

	public readUnsignedShort(): number {
        const result = this._data.readUInt16BE(this._offset);
        this._offset += 2;
        return result;
	}

	public readInt(): number {
        const result = this._data.readInt32BE(this._offset);
        this._offset += 4;
        return result;
	}

	public readUnsignedInt(): number {
        const result = this._data.readUInt32BE(this._offset);
        this._offset += 4;
        return result;
	}

	public readFloat(): number {
        const result = this._data.readFloatBE(this._offset);
        this._offset += 4;
        return result;
	}

	public readDouble(): number {
        const result = this._data.readDoubleBE(this._offset);
        this._offset += 8;
        return result;
	}

	public readMultiByte(length: number): string {
		const result = this._data.toString("utf-8", this._offset, this._offset + length);
        this._offset += length;
        return result;
	}

	public readUTF(): string {
		const length = this.readShort();
        return this.readUTFBytes(length);
	}

	public readUTFBytes(length: number): string {
		const result = this._data.toString("utf-8", this._offset, this._offset + length);
        this._offset += length;
        return result;
	}

	public writeVarInt(value: number): void { }
	public writeVarShort(value: number): void { }
	public writeVarLong(value: number): void { }

	// public get bytesAvailable(): number {
	// 	return this._data.byteLength;
	// }

	// public readObject(): * {
	// 	return this._data.readObject();
	// }

	// public get objectEncoding(): number {
	// 	return this._data.objectEncoding;
	// }

	// public set objectEncoding(version: number): void {
	// 	this._data.objectEncoding = version;
	// }

	// public get endian(): String {
	// 	return this._data.endian;
	// }

	// public set endian(type: String): void {
	// 	this._data.endian = type;
	// }

	// public writeVarInt(value: number): void {
	// 	var b: * = 0;
	// 	var ba: ByteArray = new ByteArray();
	// 	if (value >= 0 && value <= MASK_01111111) {
	// 		ba.writeByte(value);
	// 		this._data.writeBytes(ba);
	// 		return;
	// 	}
	// 	var c: number = value;
	// 	var buffer: ByteArray = new ByteArray();
	// 	while (c != 0) {
	// 		buffer.writeByte(c & CustomDataWrapper.MASK_01111111);
	// 		buffer.position = buffer.length - 1;
	// 		b = buffer.readByte();
	// 		c >>>= CustomDataWrapper.CHUNCK_BIT_SIZE;
	// 		if (c > 0) {
	// 			b |= CustomDataWrapper.MASK_10000000;
	// 		}
	// 		ba.writeByte(b);
	// 	}
	// 	this._data.writeBytes(ba);
	// }

	// public writeVarShort(value: number): void {
	// 	var b: * = 0;
	// 	if (value > CustomDataWrapper.SHORT_MAX_VALUE || value < CustomDataWrapper.SHORT_MIN_VALUE) {
	// 		throw new Error("Forbidden value");
	// 	}
	// 	var ba: ByteArray = new ByteArray();
	// 	if (value >= 0 && value <= CustomDataWrapper.MASK_01111111) {
	// 		ba.writeByte(value);
	// 		this._data.writeBytes(ba);
	// 		return;
	// 	}
	// 	var c: * = value & 65535;
	// 	var buffer: ByteArray = new ByteArray();
	// 	while (c != 0) {
	// 		buffer.writeByte(c & CustomDataWrapper.MASK_01111111);
	// 		buffer.position = buffer.length - 1;
	// 		b = buffer.readByte();
	// 		c >>>= CustomDataWrapper.CHUNCK_BIT_SIZE;
	// 		if (c > 0) {
	// 			b |= CustomDataWrapper.MASK_10000000;
	// 		}
	// 		ba.writeByte(b);
	// 	}
	// 	this._data.writeBytes(ba);
	// }

	// public writeVarLong(value: Number): void {
	// 	var i: number = 0;
	// 	var val: Int64 = Int64.fromNumber(value);
	// 	if (val.high == 0) {
	// 		this.writeint32(this._data, val.low);
	// 	}
	// 	else {
	// 		for (i = 0; i < 4; i++) {
	// 			this._data.writeByte(val.low & 127 | 128);
	// 			val.low >>>= 7;
	// 		}
	// 		if ((val.high & 268435455 << 3) == 0) {
	// 			this._data.writeByte(val.high << 4 | val.low);
	// 		}
	// 		else {
	// 			this._data.writeByte((val.high << 4 | val.low) & 127 | 128);
	// 			this.writeint32(this._data, val.high >>> 3);
	// 		}
	// 	}
	// }

	public writeBytes(buffer: Buffer, offset: number = 0, length: number = 0): void {
        this._data = Buffer.concat([this._data, buffer.subarray(offset, offset + length)]);
	}

	public writeBoolean(value: Boolean): void {
        const buffer = Buffer.alloc(1);
        buffer.writeInt8(value ? 1 : 0);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeByte(value: number): void {
        const buffer = Buffer.alloc(1);
        buffer.writeInt8(value);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeShort(value: number): void {
        const buffer = Buffer.alloc(2);
        buffer.writeInt16BE(value);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeInt(value: number): void {
        const buffer = Buffer.alloc(4);
        buffer.writeInt32BE(value);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeUnsignedInt(value: number): void {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt32BE(value);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeFloat(value: number): void {
        const buffer = Buffer.alloc(4);
        buffer.writeFloatBE(value);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeDouble(value: number): void {
        const buffer = Buffer.alloc(8);
        buffer.writeFloatBE(value);
        this._data = Buffer.concat([this._data, buffer]);
	}

	public writeMultiByte(value: string, charset?: BufferEncoding): void {
        const buffer = Buffer.from(value, charset ?? "utf-8");
        this._data = Buffer.concat([this._data, buffer]);
	}

    public writeUTF(value: string): void {
        const bufferLength = Buffer.alloc(2);
        bufferLength.writeUInt16BE(value.length, 0);
        const bufferData = Buffer.from(value, "utf-8");
        this._data = Buffer.concat([this._data, bufferLength, bufferData]);
    }

    public writeUTFBytes(value: string): void {
        const bufferData = Buffer.from(value, "utf-8");
        this._data = Buffer.concat([this._data, bufferData]);
    }

	public writeObject(object: any): void {
        const json = JSON.stringify(object);
        const buffer = Buffer.from(json, "utf-8");
        this._data = Buffer.concat([this._data, buffer]);
	}

	private readInt64(input: CustomDataWrapper): Int64 {
		var b: number = 0;
		var result: Int64 = new Int64();
		var i: number = 0;
		while (true) {
			b = input.readUnsignedByte();
			if (i == 28) {
				break;
			}
			if (b < 128) {
				result.low |= b << i;
				return result;
			}
			result.low |= (b & 127) << i;
			i += 7;
		}
		if (b >= 128) {
			b &= 127;
			result.low |= b << i;
			result.high = b >>> 4;
			i = 3;
			while (true) {
				b = input.readUnsignedByte();
				if (i < 32) {
					if (b < 128) {
						break;
					}
					result.high |= (b & 127) << i;
				}
				i += 7;
			}
			result.high |= b << i;
			return result;
		}
		result.low |= b << i;
		result.high = b >>> 4;
		return result;
	}

	private readUInt64(input: CustomDataWrapper): UInt64 {
		var b: number = 0;
		var result: UInt64 = new UInt64();
		var i: number = 0;
		while (true) {
			b = input.readUnsignedByte();
			if (i == 28) {
				break;
			}
			if (b < 128) {
				result.low |= b << i;
				return result;
			}
			result.low |= (b & 127) << i;
			i += 7;
		}
		if (b >= 128) {
			b &= 127;
			result.low |= b << i;
			result.high = b >>> 4;
			i = 3;
			while (true) {
				b = input.readUnsignedByte();
				if (i < 32) {
					if (b < 128) {
						break;
					}
					result.high |= (b & 127) << i;
				}
				i += 7;
			}
			result.high |= b << i;
			return result;
		}
		result.low |= b << i;
		result.high = b >>> 4;
		return result;
	}

	private writeint32(output: CustomDataWrapper, value: number): void {
		while (value >= 128) {
			output.writeByte(value & 127 | 128);
			value >>>= 7;
		}
		output.writeByte(value);
	}
}
