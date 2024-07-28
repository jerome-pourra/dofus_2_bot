import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class TeleportDestination
{

	public static readonly protocolId: number = 1570;

	public type: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public level: number = 0;
	public cost: number = 0;

    public constructor()
    {

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