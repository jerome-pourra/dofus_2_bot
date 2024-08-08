import { EntityLook } from "./../../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";
import { PartyEntityBaseInformation } from "./PartyEntityBaseInformation";

export class PartyEntityMemberInformation extends PartyEntityBaseInformation implements INetworkType
{

	public static readonly protocolId: number = 118;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public initiative: number = 0;
	public lifePoints: number = 0;
	public maxLifePoints: number = 0;
	public prospecting: number = 0;
	public regenRate: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return PartyEntityMemberInformation.protocolId;
    }

    public isEndpointClient()
    {
        return PartyEntityMemberInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyEntityMemberInformation.endpointServer;
    }

    public initPartyEntityMemberInformation(indexId: number = 0, entityModelId: number = 0, entityLook: EntityLook = null, initiative: number = 0, lifePoints: number = 0, maxLifePoints: number = 0, prospecting: number = 0, regenRate: number = 0): PartyEntityMemberInformation
    {
        super.initPartyEntityBaseInformation(indexId,entityModelId,entityLook);
        this.initiative = initiative;
        this.lifePoints = lifePoints;
        this.maxLifePoints = maxLifePoints;
        this.prospecting = prospecting;
        this.regenRate = regenRate;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyEntityMemberInformation(output);
    }

    public serializeAs_PartyEntityMemberInformation(output: ICustomDataOutput)
    {
        super.serializeAs_PartyEntityBaseInformation(output);
        if(this.initiative < 0)
        {
            throw new Error("Forbidden value (" + this.initiative + ") on element initiative.");
        }
        output.writeVarInt(this.initiative);
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
        }
        output.writeVarInt(this.lifePoints);
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
        }
        output.writeVarInt(this.maxLifePoints);
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
        }
        output.writeVarInt(this.prospecting);
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
        }
        output.writeByte(this.regenRate);
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