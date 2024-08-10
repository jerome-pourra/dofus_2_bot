export interface IDataInput {

    get buffer(): Buffer;  
    get length(): number;
    get readOffset(): number;
    set readOffset(offset: number);
    get writeOffset(): number;
    set writeOffset(offset: number);

    canRead(size: number): boolean;
    subarray(start: number, end: number): IDataInput;

    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readInt(): number;
    readUnsignedInt(): number;
    readShort(): number;
    readUnsignedShort(): number;
    readFloat(): number;
    readDouble(): number;
    readUTF(): string;
    
    readBytes(buffer: Buffer, offset?: number, length?: number): void;
    readMultiByte(length: number, charset?: BufferEncoding): string;
    readObject(): any;

}