export interface IDataInput {
    
    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readInt(): number;
    readUnsignedInt(): number;
    readShort(): number;
    readUnsignedShort(): number;
    readLong(): bigint;
    readUnsignedLong(): bigint;
    readFloat(): number;
    readDouble(): number;
    readUTF(): string;

}