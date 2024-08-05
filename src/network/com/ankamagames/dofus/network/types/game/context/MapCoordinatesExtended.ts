import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { MapCoordinatesAndId } from "./MapCoordinatesAndId";

export class MapCoordinatesExtended extends MapCoordinatesAndId
{

	public static readonly protocolId: number = 1599;

	public subAreaId: number = 0;

    public constructor()
    {
        super();
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