import { EntityLook } from "./../../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";
import { PartyEntityBaseInformation } from "./PartyEntityBaseInformation";

export class PartyEntityMemberInformation extends PartyEntityBaseInformation
{

	public static readonly protocolId: number = 118;

	public initiative: number = 0;
	public lifePoints: number = 0;
	public maxLifePoints: number = 0;
	public prospecting: number = 0;
	public regenRate: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyEntityMemberInformation(input);
    }

    private deserializeAs_PartyEntityMemberInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._initiativeFunc(input);
        this._lifePointsFunc(input);
        this._maxLifePointsFunc(input);
        this._prospectingFunc(input);
        this._regenRateFunc(input);
    }

    private _initiativeFunc(input: ICustomDataInput)
    {
        this.initiative = input.readVarUhInt();
        if(this.initiative < 0)
        {
            throw new Error("Forbidden value (" + this.initiative + ") on element of PartyEntityMemberInformation.initiative.");
        }
    }

    private _lifePointsFunc(input: ICustomDataInput)
    {
        this.lifePoints = input.readVarUhInt();
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element of PartyEntityMemberInformation.lifePoints.");
        }
    }

    private _maxLifePointsFunc(input: ICustomDataInput)
    {
        this.maxLifePoints = input.readVarUhInt();
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of PartyEntityMemberInformation.maxLifePoints.");
        }
    }

    private _prospectingFunc(input: ICustomDataInput)
    {
        this.prospecting = input.readVarUhInt();
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element of PartyEntityMemberInformation.prospecting.");
        }
    }

    private _regenRateFunc(input: ICustomDataInput)
    {
        this.regenRate = input.readUnsignedByte();
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element of PartyEntityMemberInformation.regenRate.");
        }
    }

}