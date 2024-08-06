import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { MapCoordinatesAndId } from "./MapCoordinatesAndId";

export class MapCoordinatesExtended extends MapCoordinatesAndId implements INetworkType
{

	public static readonly protocolId: number = 1599;

	public subAreaId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return MapCoordinatesExtended.protocolId;
    }

    public initMapCoordinatesExtended(worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0): MapCoordinatesExtended
    {
        super.initMapCoordinatesAndId(worldX,worldY,mapId);
        this.subAreaId = subAreaId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MapCoordinatesExtended(output);
    }

    public serializeAs_MapCoordinatesExtended(output: ICustomDataOutput)
    {
        super.serializeAs_MapCoordinatesAndId(output);
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapCoordinatesExtended(input);
    }

    private deserializeAs_MapCoordinatesExtended(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._subAreaIdFunc(input);
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of MapCoordinatesExtended.subAreaId.");
        }
    }

}