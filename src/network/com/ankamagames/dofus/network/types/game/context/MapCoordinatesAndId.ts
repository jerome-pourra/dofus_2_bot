import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { MapCoordinates } from "./MapCoordinates";

export class MapCoordinatesAndId extends MapCoordinates implements INetworkType
{

	public static readonly protocolId: number = 7010;

	public mapId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return MapCoordinatesAndId.protocolId;
    }

    public initMapCoordinatesAndId(worldX: number = 0, worldY: number = 0, mapId: number = 0): MapCoordinatesAndId
    {
        super.initMapCoordinates(worldX,worldY);
        this.mapId = mapId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MapCoordinatesAndId(output);
    }

    public serializeAs_MapCoordinatesAndId(output: ICustomDataOutput)
    {
        super.serializeAs_MapCoordinates(output);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapCoordinatesAndId(input);
    }

    private deserializeAs_MapCoordinatesAndId(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._mapIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of MapCoordinatesAndId.mapId.");
        }
    }

}