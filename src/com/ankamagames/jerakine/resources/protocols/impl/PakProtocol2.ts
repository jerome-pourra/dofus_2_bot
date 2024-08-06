import * as fs from 'fs';
import { IDataInput } from '../../../../../../network/utils/IDataInput';
import { CustomBuffer } from '../../../../../../network/utils/CustomBuffer';

export type PakProtocol2Index = { v: number, n: string, i: number, o: number, l: number, stream: IDataInput };

export class PakProtocol2 {

    private static _indexes: Map<string, Map<number, PakProtocol2Index>> = new Map();
    private static match = 0;
    private static total = 0;

    public static getFilesIndex(uri: string): Map<number, PakProtocol2Index> {
        if (!PakProtocol2._indexes.has(uri)) {
            this.initStream(uri);
        }
        return PakProtocol2._indexes.get(uri);
    }

    private static initStream(uri: string): void {

        let vMax: number = 0;
        let vMin: number = 0;
        let dataOffset: number = 0;
        let dataCount: number = 0;
        let indexOffset: number = 0;
        let indexCount: number = 0;
        let propertiesOffset: number = 0;
        let propertiesCount: number = 0;
        let propertyName: string | null = null;
        let propertyValue: string | null = null;
        let filePath: string | null = null;
        let file: string | null = uri;
        let tmpFile: string | null = null;
        let fileOffset: number = 0;
        let fileLength: number = 0;
        let i: number = 0;
        let idx: number = 0;
        let indexes: Map<number, PakProtocol2Index> = new Map();
        PakProtocol2._indexes.set(uri, indexes);

        while (file !== null && fs.existsSync(file)) {

            const data = fs.readFileSync(file, { flag: 'r', encoding: 'hex' });
            const buffer = new CustomBuffer(Buffer.from(data, 'hex'));
            vMax = buffer.readByte();
            vMin = buffer.readByte();
            if (vMax !== 2 || vMin !== 1) {
                return null;
            }

            buffer.readOffset = buffer.length - 24;
            dataOffset = buffer.readUnsignedInt();
            dataCount = buffer.readUnsignedInt();
            indexOffset = buffer.readUnsignedInt();
            indexCount = buffer.readUnsignedInt();
            propertiesOffset = buffer.readUnsignedInt();
            propertiesCount = buffer.readUnsignedInt();

            buffer.readOffset = propertiesOffset;
            tmpFile = file;
            file = null;

            propertyName = buffer.readUTF();
            propertyValue = buffer.readUTF();

            if (propertyName == "link") {
                idx = tmpFile.lastIndexOf("/");
                if (idx != -1) {
                    file = tmpFile.substring(0, idx) + "/" + propertyValue;
                } else {
                    file = propertyValue;
                }
            }

            buffer.readOffset = indexOffset;

            for (i = 0; i < indexCount; i++) {

                filePath = buffer.readUTF();
                fileOffset = buffer.readInt();
                fileLength = buffer.readInt();

                let mapVersion = parseInt(filePath.split('/')[0]);
                let mapName = filePath.split('/')[1];
                let mapId = parseInt(mapName.split('.')[0]);

                if (indexes.has(mapId)) {
                    console.log("Duplicate ", mapId);
                } else {
                    indexes.set(mapId, {
                        v: mapVersion,
                        n: mapName,
                        i: mapId,
                        o: fileOffset + dataOffset,
                        l: fileLength,
                        stream: buffer
                    });
                }
            }
        }
    }
}