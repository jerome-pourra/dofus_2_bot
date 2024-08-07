import { CustomBuffer } from "./CustomBuffer";

export interface IDataOutput {

    get buffer(): Buffer;  
    get length(): number;
    get readOffset(): number;
    set readOffset(offset: number);
    get writeOffset(): number;
    set writeOffset(offset: number);

    writeBoolean(param1: boolean): void;
    writeByte(param1: number): void;
    writeUnsignedByte(param1: number): void;
    writeInt(param1: number): void;
    writeUnsignedInt(param1: number): void;
    writeShort(param1: number): void;
    writeUnsignedShort(param1: number): void;
    writeFloat(param1: number): void;
    writeDouble(param1: number): void;
    writeLong(param1: bigint): void;
    writeUnsignedLong(param1: bigint): void;
    writeUTF(param1: string): void;

    writeBytes(buffer: CustomBuffer, offset?: number, length?: number): void;

}