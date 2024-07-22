import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";
import { Int64 } from "./utils/types/Int64";
import { UInt64 } from "./utils/types/UInt64";

export class CustomDataWrapper implements ICustomDataInput, ICustomDataOutput {

	private static readonly BYTE_SIZE = 8;

	private static readonly SHORT_SIZE: number = 16;

	private static readonly INT_SIZE: number = 32;

	private static readonly SHORT_MIN_VALUE: number = -32768;

	private static readonly SHORT_MAX_VALUE: number = 32767;

	private static readonly UNSIGNED_SHORT_MAX_VALUE: number = 65536;

	private static readonly CHUNCK_BIT_SIZE: number = 7;

	private static readonly MAX_ENCODING_LENGTH: number = Math.ceil(CustomDataWrapper.INT_SIZE / CustomDataWrapper.CHUNCK_BIT_SIZE);

	private static readonly MASK_10000000: number = 128;

	private static readonly MASK_01111111: number = 127;

	private _data: Buffer;
	private _offset: number = 0;

	public constructor(data: Buffer) {
		this._data = data;
	}

	public set offset(offset: number) {
		this._offset = offset;
	}

	public get offset(): number {
		return this._offset;
	}

	private bitToByte(number: number): number {
		return number / CustomDataWrapper.BYTE_SIZE;
	}

	private readSigned(binarySize: number): number {
		let byteSize = this.bitToByte(binarySize);
		let result = this._data.readIntBE(this.offset, byteSize);
		this.offset += byteSize;
		return result;
	}

	private readUnsigned(binarySize: number): number {
		let byteSize = this.bitToByte(binarySize);
		let result = this._data.readUIntBE(this.offset, byteSize);
		this.offset += byteSize;
		return result;
	}

    private readString(octetSize: number, encoding: BufferEncoding = "utf8"): string {
        let result = this._data.toString(encoding, this.offset, this.offset + octetSize);
        this.offset += octetSize;
        return result;
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
		return Boolean(this.readSigned(CustomDataWrapper.BYTE_SIZE));
	}

	public readByte(): number {
		return this.readSigned(CustomDataWrapper.BYTE_SIZE);
	}

	public readUnsignedByte(): number {
		return this.readUnsigned(CustomDataWrapper.BYTE_SIZE);
	}

	public readShort(): number {
		return this.readSigned(CustomDataWrapper.SHORT_SIZE);
	}

	public readUnsignedShort(): number {
		return this.readUnsigned(CustomDataWrapper.SHORT_SIZE);
	}

	public readInt(): number {
		return this.readSigned(CustomDataWrapper.INT_SIZE);
	}

	public readUnsignedInt(): number {
		return this.readUnsigned(CustomDataWrapper.INT_SIZE);
	}

	public readFloat(): number {
        let value = this._data.readFloatBE(this.offset);
        this.offset += 4;
        return value;
	}

	public readDouble(): number {
        let value = this._data.readDoubleBE(this.offset);
        this.offset += 8;
        return value;
	}

	public readMultiByte(length: number, charset: BufferEncoding): string {
		return this._data.toString(charset, this._offset, length);
	}

	public readUTF(): string {
		let size = this.readShort();
        return this.readString(size);
	}

	public readUTFBytes(length: number): string {
		return this._data.toString("utf-8", this._offset, length);
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

	// public writeBytes(bytes: ByteArray, offset: number = 0, length: number = 0): void {
	// 	this._data.writeBytes(bytes, offset, length);
	// }

	// public writeBoolean(value: Boolean): void {
	// 	this._data.writeBoolean(value);
	// }

	// public writeByte(value: number): void {
	// 	this._data.writeByte(value);
	// }

	// public writeShort(value: number): void {
	// 	this._data.writeShort(value);
	// }

	// public writeInt(value: number): void {
	// 	this._data.writeInt(value);
	// }

	// public writeUnsignedInt(value: number): void {
	// 	this._data.writeUnsignedInt(value);
	// }

	// public writeFloat(value: Number): void {
	// 	this._data.writeFloat(value);
	// }

	// public writeDouble(value: Number): void {
	// 	this._data.writeDouble(value);
	// }

	// public writeMultiByte(value: String, charSet: String): void {
	// 	this._data.writeMultiByte(value, charSet);
	// }

	// public writeUTF(value: String): void {
	// 	this._data.writeUTF(value);
	// }

	// public writeUTFBytes(value: String): void {
	// 	this._data.writeUTFBytes(value);
	// }

	// public writeObject(object: *): void {
	// 	this._data.writeObject(object);
	// }

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

	// private function writeint32(output: IDataOutput, value: number): void {
	// 	while (value >= 128) {
	// 		output.writeByte(value & 127 | 128);
	// 		value >>>= 7;
	// 	}
	// 	output.writeByte(value);
	// }
}
