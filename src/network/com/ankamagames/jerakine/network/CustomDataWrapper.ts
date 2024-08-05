import { CustomBuffer } from "../../../../CustomBuffer";
import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";
import { ByteArray } from "./utils/types/ByteArray";
import { Int64 } from "./utils/types/Int64";
import { UInt64 } from "./utils/types/UInt64";

export class CustomDataWrapper extends CustomBuffer implements ICustomDataInput, ICustomDataOutput {

    private static readonly SHORT_SIZE: number = 16;
    private static readonly INT_SIZE: number = 32;
    private static readonly SHORT_MAX_VALUE: number = 32767;
    private static readonly UNSIGNED_SHORT_MAX_VALUE: number = 65536;
    private static readonly CHUNCK_BIT_SIZE: number = 7;
    private static readonly MASK_10000000: number = 128;
    private static readonly MASK_01111111: number = 127;

    public constructor(data: Buffer = Buffer.alloc(0)) {
        super(data);
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

    public readBytes(buffer: Buffer, offset: number = 0, length: number = 0): void {
        if (length === 0) {
            length = buffer.length - offset;
        }
        this._buffer = buffer.subarray(offset, offset + length);
    }

    public readVarLong(): number {
        return Number(this.readInt64(this));
    }

    public readVarUhLong(): number {
        return Number(this.readUInt64(this));
    }

    public readMultiByte(length: number): string {
        const result = this._buffer.toString("utf-8", this._readOffset, this._readOffset + length);
        this._readOffset += length;
        return result;
    }

    public readUTFBytes(length: number): string {
        const result = this._buffer.toString("utf-8", this._readOffset, this._readOffset + length);
        this._readOffset += length;
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

    public writeMultiByte(value: string, charset?: BufferEncoding): void {
        const buffer = Buffer.from(value, charset ?? "utf-8");
        this._buffer = Buffer.concat([this._buffer, buffer]);
    }

    public writeObject(object: any): void {
        const json = JSON.stringify(object);
        const buffer = Buffer.from(json, "utf-8");
        this._buffer = Buffer.concat([this._buffer, buffer]);
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
}
