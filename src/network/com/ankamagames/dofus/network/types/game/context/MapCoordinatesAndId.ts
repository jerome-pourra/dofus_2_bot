import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { MapCoordinates } from "./MapCoordinates";

export class MapCoordinatesAndId extends MapCoordinates
{

	public static readonly protocolId: number = 7010;

	public mapId: number = 0;

    public constructor()
    {
        super();
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