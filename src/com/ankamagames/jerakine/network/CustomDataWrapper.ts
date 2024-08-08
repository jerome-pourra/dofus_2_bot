import { CustomBuffer } from "../../../../network/utils/CustomBuffer";
import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";
import { Int64 } from "./utils/types/Int64";
import { UInt64 } from "./utils/types/UInt64";

export class CustomDataWrapper extends CustomBuffer implements ICustomDataInput, ICustomDataOutput {

    private static readonly SHORT_SIZE: number = 16;
    private static readonly INT_SIZE: number = 32;
    private static readonly SHORT_MAX_VALUE: number = 32767;
    private static readonly SHORT_MIN_VALUE: number = -32768;
    private static readonly UNSIGNED_SHORT_MAX_VALUE: number = 65536;
    private static readonly CHUNCK_BIT_SIZE: number = 7;
    private static readonly MASK_10000000: number = 128;
    private static readonly MASK_01111111: number = 127;

    public constructor(data: Buffer = Buffer.alloc(0)) {
        super(data);
    }

    public override subarray(start?: number, end?: number): ICustomDataInput {
        return new CustomDataWrapper(this._buffer.subarray(start, end));
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
        return this.readInt64().toNumber();
    }

    public readVarUhLong(): number {
        return this.readUInt64().toNumber();
    }

    public writeVarInt(value: number): void {}
    public writeVarShort(value: number): void {}
    public writeVarLong(value: number): void {}

    // public writeVarInt(value: number): void {
    //     let b: number = 0;
    //     let ba: number[] = [];
    //     if (value >= 0 && value <= CustomDataWrapper.MASK_01111111) {
    //         ba.push(value);
    //         this.writeBytes(new CustomBuffer(Buffer.from(ba)));
    //         return;
    //     }
    //     let c: number = value;
    //     let buffer: number[] = [];
    //     while (c != 0) {
    //         buffer.push(c & CustomDataWrapper.MASK_01111111);
    //         b = buffer[buffer.length - 1];
    //         c >>>= CustomDataWrapper.CHUNCK_BIT_SIZE;
    //         if (c > 0) {
    //             b |= CustomDataWrapper.MASK_10000000;
    //         }
    //         ba.push(b);
    //     }
    //     this.writeBytes(new CustomBuffer(Buffer.from(ba)));
    // }

    // public writeVarShort(value: number): void {
    //     let b: number = 0;
    //     if (value > CustomDataWrapper.SHORT_MAX_VALUE || value < CustomDataWrapper.SHORT_MIN_VALUE) {
    //         throw new Error("Forbidden value");
    //     }
    //     let ba: number[] = [];
    //     if (value >= 0 && value <= CustomDataWrapper.MASK_01111111) {
    //         ba.push(value);
    //         this.writeBytes(new CustomBuffer(Buffer.from(ba)));
    //         return;
    //     }
    //     let c: number = value & 65535;
    //     let buffer: number[] = [];
    //     while (c != 0) {
    //         buffer.push(c & CustomDataWrapper.MASK_01111111);
    //         b = buffer[buffer.length - 1];
    //         c >>>= CustomDataWrapper.CHUNCK_BIT_SIZE;
    //         if (c > 0) {
    //             b |= CustomDataWrapper.MASK_10000000;
    //         }
    //         ba.push(b);
    //     }
    //     this.writeBytes(new CustomBuffer(Buffer.from(ba)));
    // }

    // public writeVarLong(value: number): void {
    //     let i: number = 0;
    //     let val: Int64 = Int64.fromNumber(value);
    //     if (val.high === 0) {
    //         this.writeint32(val.low);
    //     } else {
    //         for (i = 0; i < 4; i++) {
    //             this.writeByte(val.low & CustomDataWrapper.MASK_01111111 | CustomDataWrapper.MASK_10000000);
    //             val.low >>>= CustomDataWrapper.CHUNCK_BIT_SIZE;
    //         }
    //         if ((val.high & (268435455 << 3)) === 0) {
    //             this.writeByte(val.high << 4 | val.low);
    //         } else {
    //             this.writeByte((val.high << 4 | val.low) & CustomDataWrapper.MASK_01111111 | CustomDataWrapper.MASK_10000000);
    //             this.writeint32(val.high >>> 3);
    //         }
    //     }
    // }

    private readInt64(): Int64 {
        var b: number = 0;
        var result: Int64 = new Int64();
        var i: number = 0;
        while (true) {
            b = this.readUnsignedByte();
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
                b = this.readUnsignedByte();
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

    private readUInt64(): UInt64 {
        var b: number = 0;
        var result: UInt64 = new UInt64();
        var i: number = 0;
        while (true) {
            b = this.readUnsignedByte();
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
                b = this.readUnsignedByte();
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

    private writeint32(value: number): void {
        while (value >= 128) {
            this.writeByte(value & 127 | 128);
            value >>>= 7;
        }
        this.writeByte(value);
    }

}
