import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class TeleportDestination implements INetworkType
{

	public static readonly protocolId: number = 1570;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public type: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public level: number = 0;
	public cost: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return TeleportDestination.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportDestination.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportDestination.endpointServer;
    }

    public initTeleportDestination(type: number = 0, mapId: number = 0, subAreaId: number = 0, level: number = 0, cost: number = 0): TeleportDestination
    {
        this.type = type;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        this.level = level;
        this.cost = cost;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TeleportDestination(output);
    }

    public serializeAs_TeleportDestination(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        if(this.cost < 0)
        {
            throw new Error("Forbidden value (" + this.cost + ") on element cost.");
        }
        output.writeVarShort(this.cost);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportDestination(input);
    }

    private deserializeAs_TeleportDestination(input: ICustomDataInput)
    {
        this._typeFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        this._levelFunc(input);
        this._costFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of TeleportDestination.type.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TeleportDestination.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of TeleportDestination.subAreaId.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of TeleportDestination.level.");
        }
    }

    private _costFunc(input: ICustomDataInput)
    {
        this.cost = input.readVarUhShort();
        if(this.cost < 0)
        {
            throw new Error("Forbidden value (" + this.cost + ") on element of TeleportDestination.cost.");
        }
    }

}