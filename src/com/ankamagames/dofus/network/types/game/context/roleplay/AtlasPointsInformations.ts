import { MapCoordinatesExtended } from "./../MapCoordinatesExtended";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AtlasPointsInformations implements INetworkType
{

	public static readonly protocolId: number = 6167;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public type: number = 0;
	public coords: Array<MapCoordinatesExtended>;

    public constructor()
    {
        this.coords = Array<MapCoordinatesExtended>();
    }

    public getTypeId()
    {
        return AtlasPointsInformations.protocolId;
    }

    public isEndpointClient()
    {
        return AtlasPointsInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return AtlasPointsInformations.endpointServer;
    }

    public initAtlasPointsInformations(type: number = 0, coords: Array<MapCoordinatesExtended> = null): AtlasPointsInformations
    {
        this.type = type;
        this.coords = coords;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AtlasPointsInformations(output);
    }

    public serializeAs_AtlasPointsInformations(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
        output.writeShort(this.coords.length);
        for(var _i2: number = 0; _i2 < this.coords.length; _i2++)
        {
            (this.coords[_i2] as MapCoordinatesExtended).serializeAs_MapCoordinatesExtended(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AtlasPointsInformations(input);
    }

    private deserializeAs_AtlasPointsInformations(input: ICustomDataInput)
    {
        let _item2: MapCoordinatesExtended;
        this._typeFunc(input);
        let _coordsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _coordsLen; _i2++)
        {
            _item2 = new MapCoordinatesExtended();
            _item2.deserialize(input);
            this.coords.push(_item2);
        }
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of AtlasPointsInformations.type.");
        }
    }

}