import { log } from "console";
import { CustomBuffer } from "../../../../network/utils/CustomBuffer";
import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";

export class CustomDataWrapper extends CustomBuffer implements ICustomDataInput, ICustomDataOutput {

    public constructor(data?: Buffer) {
        super(data);
    }

    public override subarray(start?: number, end?: number): ICustomDataInput {
        return new CustomDataWrapper(this._buffer.subarray(start, end));
    }

    public readVarShort(): number {
        let value = 0;
        for (let i = 0; i < CustomDataWrapper.SHORT_LENGTH; i += 7) {
            const b = this.readByte()
            value |= (b & 0b01111111) << i;
            if (!(b & 0b10000000)) return value;
        }
        throw new Error("Too much data");
    }

    public readVarUhShort(): number {
        return this.readVarShort();
    }

    public readVarInt(): number {
        let value = 0;
        for (let i = 0; i < CustomDataWrapper.INT_LENGTH; i += 7) {
            const b = this.readByte()
            value |= (b & 0b01111111) << i;
            if (!(b & 0b10000000)) return value;
        }
        throw new Error("Too much data");
    }

    public readVarUhInt(): number {
        return this.readVarInt();
    }

    public readVarLong(): number {
        let value = 0n;
        for (let i = 0n; i < CustomDataWrapper.LONG_LENGTH; i += 7n) {
            const b = this.readByte()
            value |= (BigInt(b) & 0b01111111n) << i;
            if (!(b & 0b10000000)) return Number(value);
        }
        throw new Error("Too much data");
    }

    public readVarUhLong(): number {
        return this.readVarLong();
    }

    public writeVarShort(value: number): void {
        if(value < CustomDataWrapper.SHORT_MIN_SIZE || value > CustomDataWrapper.SHORT_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeVar(value);
    }

    public writeVarInt(value: number): void {
        if(value < CustomDataWrapper.INT_MIN_SIZE || value > CustomDataWrapper.INT_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + value + ") on element value.");
        }
        this.writeVar(value);
    }

    public writeVarLong(value: number): void {
        let val = BigInt(value);
        if(val < CustomDataWrapper.LONG_MIN_SIZE || val > CustomDataWrapper.LONG_UNSIGNED_MAX_SIZE) {
            throw new RangeError("Forbidden value (" + val + ") on element value.");
        }
        this.writeVarBig(val);
    }

    private writeVar(value: number): void {
        while (true) {
            if ((value & ~0b01111111) === 0) {
                this.writeByte(value);
                return;
            } else {
                this.writeByte((value & 0b01111111) | 0b10000000);
                value >>>= 7;
            }
        }
    }

    private writeVarBig(value: bigint): void {
        while (true) {
            if ((value & ~0b01111111n) === 0n) {
                this.writeByte(Number(value));
                return;
            } else {
                this.writeByte(Number((value & 0b01111111n) | 0b10000000n));
                value >>= 7n;
            }
        }
    }

}
