import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyUpdateLightMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4231;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;
	public lifePoints: number = 0;
	public maxLifePoints: number = 0;
	public prospecting: number = 0;
	public regenRate: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyUpdateLightMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyUpdateLightMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyUpdateLightMessage.endpointServer;
    }

    public initPartyUpdateLightMessage(partyId: number = 0, id: number = 0, lifePoints: number = 0, maxLifePoints: number = 0, prospecting: number = 0, regenRate: number = 0): PartyUpdateLightMessage
    {
        super.initAbstractPartyEventMessage(partyId);
        this.id = id;
        this.lifePoints = lifePoints;
        this.maxLifePoints = maxLifePoints;
        this.prospecting = prospecting;
        this.regenRate = regenRate;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyUpdateLightMessage(output);
    }

    public serializeAs_PartyUpdateLightMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
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
        this.deserializeAs_PartyUpdateLightMessage(input);
    }

    private deserializeAs_PartyUpdateLightMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._idFunc(input);
        this._lifePointsFunc(input);
        this._maxLifePointsFunc(input);
        this._prospectingFunc(input);
        this._regenRateFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of PartyUpdateLightMessage.id.");
        }
    }

    private _lifePointsFunc(input: ICustomDataInput)
    {
        this.lifePoints = input.readVarUhInt();
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element of PartyUpdateLightMessage.lifePoints.");
        }
    }

    private _maxLifePointsFunc(input: ICustomDataInput)
    {
        this.maxLifePoints = input.readVarUhInt();
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of PartyUpdateLightMessage.maxLifePoints.");
        }
    }

    private _prospectingFunc(input: ICustomDataInput)
    {
        this.prospecting = input.readVarUhInt();
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element of PartyUpdateLightMessage.prospecting.");
        }
    }

    private _regenRateFunc(input: ICustomDataInput)
    {
        this.regenRate = input.readUnsignedByte();
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element of PartyUpdateLightMessage.regenRate.");
        }
    }

}