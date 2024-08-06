import { Fixture } from './Fixture';
import { Layer } from './Layer';
import { CellData } from './CellData';
import { IDataInput } from "../../../../../utils/IDataInput";

export class Map {

    private static decryptionKey: Buffer = null;

    public mapVersion: number;
    public encrypted: boolean;
    public encryptionVersion: number;
    public groundCRC: number;
    public zoomScale: number = 1;
    public zoomOffsetX: number;
    public zoomOffsetY: number;
    public groundCacheCurrentlyUsed: number = 0;
    public id: number;
    public relativeId: number;
    public mapType: number;
    public backgroundsCount: number;
    public backgroundFixtures: Fixture[];
    public foregroundsCount: number;
    public foregroundFixtures: Fixture[];
    public subareaId: number;
    public shadowBonusOnEntities: number;
    public gridColor: number;
    public backgroundColor: number;
    public backgroundRed: number;
    public backgroundGreen: number;
    public backgroundBlue: number;
    public backgroundAlpha: number = 0;
    public topNeighbourId: number;
    public bottomNeighbourId: number;
    public leftNeighbourId: number;
    public rightNeighbourId: number;
    public cellsCount: number;
    public layersCount: number;
    public isUsingNewMovementSystem: boolean = false;
    public layers: Layer[];
    public cells: CellData[];
    public topArrowCell: number[];
    public leftArrowCell: number[];
    public bottomArrowCell: number[];
    public rightArrowCell: number[];
    private _parsed: boolean;
    private _failed: boolean;
    // private _gfxList: NormalGraphicalElementData[];
    // private _gfxCount: number[];
    public tacticalModeTemplateId: number;

    constructor() {
        this.topArrowCell = [];
        this.leftArrowCell = [];
        this.bottomArrowCell = [];
        this.rightArrowCell = [];
    }

    public get parsed(): boolean {
        return this._parsed;
    }

    public get failed(): boolean {
        return this._failed;
    }

    public fromRaw(raw: IDataInput): void {

        let i: number = 0;
        let header: number = 0;
        let bg: Fixture = null;
        let la: Layer = null;
        let _oldMvtSystem: number = 0;
        let cd: CellData = null;
        let dataLen: number = 0;
        // let encryptedData: ByteArray = null;
        let readColor: number = 0;
        let gridAlpha: number = 0;
        let gridRed: number = 0;
        let gridGreen: number = 0;
        let gridBlue: number = 0;
        let fg: Fixture = null;

        if (Map.decryptionKey == null) {
            Map.decryptionKey = Buffer.from("649ae451ca33ec53bbcbcc33becf15f4", "ascii");
        }

        try {
            header = raw.readByte();
            if (header != 77) {
                throw new Error("Unknown file format");
            }
            this.mapVersion = raw.readByte();
            this.id = raw.readUnsignedInt();
            if (this.mapVersion >= 7) {
                this.encrypted = raw.readBoolean();
                this.encryptionVersion = raw.readByte();
                dataLen = raw.readInt();                
                if (this.encrypted) {
                    throw new Error("Map decryption is not supported today...");
                    // if (!Map.decryptionKey) {
                    //     throw new Error("Map decryption key is empty");
                    // }
                    // encryptedData = new ByteArray();
                    // raw.readBytes(encryptedData, 0, dataLen);
                    // for (i = 0; i < encryptedData.length; i++) {
                    //     encryptedData[i] ^= Map.decryptionKey[i % Map.decryptionKey.length];
                    // }
                    // encryptedData.position = 0;
                    // raw = encryptedData;
                }
            }
            this.relativeId = raw.readUnsignedInt();
            this.mapType = raw.readByte();
            this.subareaId = raw.readInt();
            this.topNeighbourId = raw.readInt();
            this.bottomNeighbourId = raw.readInt();
            this.leftNeighbourId = raw.readInt();
            this.rightNeighbourId = raw.readInt();
            this.shadowBonusOnEntities = raw.readUnsignedInt();
            if (this.mapVersion >= 9) {
                readColor = raw.readInt();
                this.backgroundAlpha = (readColor & 4278190080) >> 32;
                this.backgroundRed = (readColor & 16711680) >> 16;
                this.backgroundGreen = (readColor & 65280) >> 8;
                this.backgroundBlue = readColor & 255;
                readColor = raw.readUnsignedInt();
                gridAlpha = (readColor & 4278190080) >> 32;
                gridRed = (readColor & 16711680) >> 16;
                gridGreen = (readColor & 65280) >> 8;
                gridBlue = readColor & 255;
                this.gridColor = (gridAlpha & 255) << 32 | (gridRed & 255) << 16 | (gridGreen & 255) << 8 | gridBlue & 255;
            } else if (this.mapVersion >= 3) {
                this.backgroundRed = raw.readByte();
                this.backgroundGreen = raw.readByte();
                this.backgroundBlue = raw.readByte();
            }
            this.backgroundColor = (this.backgroundAlpha & 255) << 32 | (this.backgroundRed & 255) << 16 | (this.backgroundGreen & 255) << 8 | this.backgroundBlue & 255;
            if (this.mapVersion >= 4) {
                this.zoomScale = raw.readUnsignedShort() / 100;
                this.zoomOffsetX = raw.readShort();
                this.zoomOffsetY = raw.readShort();
                if (this.zoomScale < 1) {
                    this.zoomScale = 1;
                    this.zoomOffsetX = this.zoomOffsetY = 0;
                }
            }
            if (this.mapVersion > 10) {
                this.tacticalModeTemplateId = raw.readInt();
            }
            this.backgroundsCount = raw.readByte();
            this.backgroundFixtures = new Array<Fixture>(this.backgroundsCount);
            for (i = 0; i < this.backgroundsCount; i++) {
                bg = new Fixture(this);
                bg.fromRaw(raw);
                this.backgroundFixtures[i] = bg;
            }
            this.foregroundsCount = raw.readByte();
            this.foregroundFixtures = new Array<Fixture>(this.foregroundsCount);
            for (i = 0; i < this.foregroundsCount; i++) {
                fg = new Fixture(this);
                fg.fromRaw(raw);
                this.foregroundFixtures[i] = fg;
            }
            this.cellsCount = 560; // Remplacez par la constante appropriée
            raw.readInt();
            this.groundCRC = raw.readInt();
            this.layersCount = raw.readByte();
            this.layers = new Array<Layer>(this.layersCount);
            for (i = 0; i < this.layersCount; i++) {
                la = new Layer(this);
                la.fromRaw(raw, this.mapVersion);
                this.layers[i] = la;
            }
            this.cells = new Array<CellData>(this.cellsCount);
            for (i = 0; i < this.cellsCount; i++) {
                cd = new CellData(this, i);
                cd.fromRaw(raw);
                if (!_oldMvtSystem) {
                    _oldMvtSystem = cd.moveZone;
                }
                if (cd.moveZone != _oldMvtSystem) {
                    this.isUsingNewMovementSystem = true;
                }
                this.cells[i] = cd;
            }
            this.topArrowCell = [];
            this.leftArrowCell = [];
            this.bottomArrowCell = [];
            this.rightArrowCell = [];
            this._parsed = true;
        } catch (e) {
            this._failed = true;
            throw e;
        }
    }
}