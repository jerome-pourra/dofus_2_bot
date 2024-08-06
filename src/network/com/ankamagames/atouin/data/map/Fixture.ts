import { IDataInput } from '../../../../../utils/IDataInput';
import { Map } from './Map';

export class Fixture {

    public fixtureId: number;
    public offset: { x: number, y: number };
    public hue: number;
    public redMultiplier: number;
    public greenMultiplier: number;
    public blueMultiplier: number;
    public alpha: number;
    public xScale: number;
    public yScale: number;
    public rotation: number;

    private _map: Map;

    constructor(map: Map) {
        this._map = map;
    }

    public get map(): Map {
        return this._map;
    }

    public fromRaw(raw: IDataInput): void {
        try {
            this.fixtureId = raw.readInt();
            this.offset = { x: null, y: null };
            this.offset.x = raw.readShort();
            this.offset.y = raw.readShort();
            this.rotation = raw.readShort();
            this.xScale = raw.readShort();
            this.yScale = raw.readShort();
            this.redMultiplier = raw.readByte();
            this.greenMultiplier = raw.readByte();
            this.blueMultiplier = raw.readByte();
            this.hue = this.redMultiplier | this.greenMultiplier | this.blueMultiplier;
            this.alpha = raw.readUnsignedByte();
        } catch (e) {
            throw e;
        }
    }
}