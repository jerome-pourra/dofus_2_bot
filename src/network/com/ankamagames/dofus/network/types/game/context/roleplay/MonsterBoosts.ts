import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class MonsterBoosts implements INetworkType
{

	public static readonly protocolId: number = 1084;

	public id: number = 0;
	public xpBoost: number = 0;
	public dropBoost: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return MonsterBoosts.protocolId;
    }

    public initMonsterBoosts(id: number = 0, xpBoost: number = 0, dropBoost: number = 0): MonsterBoosts
    {
        this.id = id;
        this.xpBoost = xpBoost;
        this.dropBoost = dropBoost;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MonsterBoosts(output);
    }

    public serializeAs_MonsterBoosts(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
        if(this.xpBoost < 0)
        {
            throw new Error("Forbidden value (" + this.xpBoost + ") on element xpBoost.");
        }
        output.writeVarShort(this.xpBoost);
        if(this.dropBoost < 0)
        {
            throw new Error("Forbidden value (" + this.dropBoost + ") on element dropBoost.");
        }
        output.writeVarShort(this.dropBoost);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MonsterBoosts(input);
    }

    private deserializeAs_MonsterBoosts(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._xpBoostFunc(input);
        this._dropBoostFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of MonsterBoosts.id.");
        }
    }

    private _xpBoostFunc(input: ICustomDataInput)
    {
        this.xpBoost = input.readVarUhShort();
        if(this.xpBoost < 0)
        {
            throw new Error("Forbidden value (" + this.xpBoost + ") on element of MonsterBoosts.xpBoost.");
        }
    }

    private _dropBoostFunc(input: ICustomDataInput)
    {
        this.dropBoost = input.readVarUhShort();
        if(this.dropBoost < 0)
        {
            throw new Error("Forbidden value (" + this.dropBoost + ") on element of MonsterBoosts.dropBoost.");
        }
    }

}