export interface IDataOutput {

    writeBoolean(value: boolean): void;
    writeByte(value: number): void;
    writeUnsignedByte(value: number): void;
    writeInt(value: number): void;
    writeUnsignedInt(value: number): void;
    writeShort(value: number): void;
    writeUnsignedShort(value: number): void;
    writeFloat(value: number): void;
    writeDouble(value: number): void;
    writeLong(value: bigint): void;
    writeUnsignedLong(value: bigint): void;
    writeUTF(value: string): void;

}