export interface ICustomDataInput {

	readBytes(param1: Buffer, param2: number, param3: number): void;
	readBoolean(): boolean;
	readByte(): number;
	readUnsignedByte(): number;
	readShort(): number;
	readUnsignedShort(): number;
	readInt(): number;
	readUnsignedInt(): number;
	readFloat(): number;
	readDouble(): number;
	readMultiByte(param1: number, param2: BufferEncoding): string;
	readUTF(): string;
	readUTFBytes(param1: number): string;

	readVarInt(): number;
	readVarUhInt(): number;
	readVarShort(): number;
	readVarUhShort(): number;
	readVarLong(): number;
	readVarUhLong(): number;
}