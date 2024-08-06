import { IDataInput } from '../../../../../network/utils/IDataInput';
import { Map } from './Map';

export class CellData {

    public id: number;
    public speed: number;
    public mapChangeData: number;
    public moveZone: number;

    private _losmov: number = 3;
    private _floor: number;
    private _map: Map;
    private _arrow: number = 0;
    private _linkedZone: number;
    private _mov: boolean;
    private _los: boolean;
    private _nonWalkableDuringFight: boolean;
    private _red: boolean;
    private _blue: boolean;
    private _farmCell: boolean;
    private _havenbagCell: boolean;
    private _visible: boolean;
    private _nonWalkableDuringRP: boolean;

    constructor(map: Map, cellId: number) {
        this.id = cellId;
        this._map = map;
    }

    public get map(): Map {
        return this._map;
    }

    public get mov(): boolean {
        return this._mov;
    }

    public get los(): boolean {
        return this._los;
    }

    public get nonWalkableDuringFight(): boolean {
        return this._nonWalkableDuringFight;
    }

    public get red(): boolean {
        return this._red;
    }

    public get blue(): boolean {
        return this._blue;
    }

    public get farmCell(): boolean {
        return this._farmCell;
    }

    public get havenbagCell(): boolean {
        return this._havenbagCell;
    }

    public get visible(): boolean {
        return this._visible;
    }

    public get nonWalkableDuringRP(): boolean {
        return this._nonWalkableDuringRP;
    }

    public get floor(): number {
        return this._floor;
    }

    public get useTopArrow(): boolean {
        return (this._arrow & 1) !== 0;
    }

    public get useBottomArrow(): boolean {
        return (this._arrow & 2) !== 0;
    }

    public get useRightArrow(): boolean {
        return (this._arrow & 4) !== 0;
    }

    public get useLeftArrow(): boolean {
        return (this._arrow & 8) !== 0;
    }

    public hasLinkedZoneRP(): boolean {
        return this.mov && !this.farmCell;
    }

    public get linkedZoneRP(): number {
        return (this._linkedZone & 240) >> 4;
    }

    public hasLinkedZoneFight(): boolean {
        return this.mov && !this.nonWalkableDuringFight && !this.farmCell && !this.havenbagCell;
    }

    public get linkedZoneFight(): number {
        return this._linkedZone & 15;
    }

    public fromRaw(raw: IDataInput): void {
        let tmpbytesv9: number = 0;
        let topArrow: boolean = false;
        let bottomArrow: boolean = false;
        let rightArrow: boolean = false;
        let leftArrow: boolean = false;
        let tmpBits: number = 0;
        try {
            this._floor = raw.readByte() * 10;
            if (this._floor === -1280) {
                return;
            }
            if (this._map.mapVersion >= 9) {
                tmpbytesv9 = raw.readShort();
                this._mov = (tmpbytesv9 & 1) === 0;
                this._nonWalkableDuringFight = (tmpbytesv9 & 2) !== 0;
                this._nonWalkableDuringRP = (tmpbytesv9 & 4) !== 0;
                this._los = (tmpbytesv9 & 8) === 0;
                this._blue = (tmpbytesv9 & 16) !== 0;
                this._red = (tmpbytesv9 & 32) !== 0;
                this._visible = (tmpbytesv9 & 64) !== 0;
                this._farmCell = (tmpbytesv9 & 128) !== 0;
                if (this.map.mapVersion >= 10) {
                    this._havenbagCell = (tmpbytesv9 & 256) !== 0;
                    topArrow = (tmpbytesv9 & 512) !== 0;
                    bottomArrow = (tmpbytesv9 & 1024) !== 0;
                    rightArrow = (tmpbytesv9 & 2048) !== 0;
                    leftArrow = (tmpbytesv9 & 4096) !== 0;
                } else {
                    topArrow = (tmpbytesv9 & 256) !== 0;
                    bottomArrow = (tmpbytesv9 & 512) !== 0;
                    rightArrow = (tmpbytesv9 & 1024) !== 0;
                    leftArrow = (tmpbytesv9 & 2048) !== 0;
                }
                if (topArrow) {
                    this._map.topArrowCell.push(this.id);
                }
                if (bottomArrow) {
                    this._map.bottomArrowCell.push(this.id);
                }
                if (rightArrow) {
                    this._map.rightArrowCell.push(this.id);
                }
                if (leftArrow) {
                    this._map.leftArrowCell.push(this.id);
                }
            } else {
                this._losmov = raw.readUnsignedByte();
                this._los = ((this._losmov & 2) >> 1) === 1;
                this._mov = (this._losmov & 1) === 1;
                this._visible = ((this._losmov & 64) >> 6) === 1;
                this._farmCell = ((this._losmov & 32) >> 5) === 1;
                this._blue = ((this._losmov & 16) >> 4) === 1;
                this._red = ((this._losmov & 8) >> 3) === 1;
                this._nonWalkableDuringRP = ((this._losmov & 128) >> 7) === 1;
                this._nonWalkableDuringFight = ((this._losmov & 4) >> 2) === 1;
            }
            this.speed = raw.readByte();
            this.mapChangeData = raw.readByte();
            if (this._map.mapVersion > 5) {
            }
            if (this._map.mapVersion > 10 && (this.hasLinkedZoneRP() || this.hasLinkedZoneFight())) {
                this._linkedZone = raw.readUnsignedByte();
            }
            if (this._map.mapVersion > 7 && this.map.mapVersion < 9) {
                tmpBits = raw.readByte();
                this._arrow = 15 & tmpBits;
                if (this.useTopArrow) {
                    this._map.topArrowCell.push(this.id);
                }
                if (this.useBottomArrow) {
                    this._map.bottomArrowCell.push(this.id);
                }
                if (this.useLeftArrow) {
                    this._map.leftArrowCell.push(this.id);
                }
                if (this.useRightArrow) {
                    this._map.rightArrowCell.push(this.id);
                }
            }
        } catch (e) {
            throw e;
        }
    }

    public toString(): string {
        return `map : ${this._map.id} CellId : ${this.id} mov : ${this._mov} los : ${this._los} nonWalkableDuringFight : ${this._nonWalkableDuringFight} nonWalkableDuringRp : ${this._nonWalkableDuringRP} farmCell : ${this._farmCell} havenbagCell: ${this._havenbagCell} visbile : ${this._visible} speed: ${this.speed} moveZone: ${this.moveZone} linkedZoneId: ${this._linkedZone}`;
    }
}