import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartedMessage } from "./ExchangeStartedMessage";

export class ExchangeStartedWithPodsMessage extends ExchangeStartedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5028;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public firstCharacterId: number = 0;
	public firstCharacterCurrentWeight: number = 0;
	public firstCharacterMaxWeight: number = 0;
	public secondCharacterId: number = 0;
	public secondCharacterCurrentWeight: number = 0;
	public secondCharacterMaxWeight: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartedWithPodsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartedWithPodsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartedWithPodsMessage.endpointServer;
    }

    public initExchangeStartedWithPodsMessage(exchangeType: number = 0, firstCharacterId: number = 0, firstCharacterCurrentWeight: number = 0, firstCharacterMaxWeight: number = 0, secondCharacterId: number = 0, secondCharacterCurrentWeight: number = 0, secondCharacterMaxWeight: number = 0): ExchangeStartedWithPodsMessage
    {
        super.initExchangeStartedMessage(exchangeType);
        this.firstCharacterId = firstCharacterId;
        this.firstCharacterCurrentWeight = firstCharacterCurrentWeight;
        this.firstCharacterMaxWeight = firstCharacterMaxWeight;
        this.secondCharacterId = secondCharacterId;
        this.secondCharacterCurrentWeight = secondCharacterCurrentWeight;
        this.secondCharacterMaxWeight = secondCharacterMaxWeight;
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
        this.serializeAs_ExchangeStartedWithPodsMessage(output);
    }

    public serializeAs_ExchangeStartedWithPodsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeStartedMessage(output);
        if(this.firstCharacterId < -9007199254740992 || this.firstCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.firstCharacterId + ") on element firstCharacterId.");
        }
        output.writeDouble(this.firstCharacterId);
        if(this.firstCharacterCurrentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.firstCharacterCurrentWeight + ") on element firstCharacterCurrentWeight.");
        }
        output.writeVarInt(this.firstCharacterCurrentWeight);
        if(this.firstCharacterMaxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.firstCharacterMaxWeight + ") on element firstCharacterMaxWeight.");
        }
        output.writeVarInt(this.firstCharacterMaxWeight);
        if(this.secondCharacterId < -9007199254740992 || this.secondCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.secondCharacterId + ") on element secondCharacterId.");
        }
        output.writeDouble(this.secondCharacterId);
        if(this.secondCharacterCurrentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.secondCharacterCurrentWeight + ") on element secondCharacterCurrentWeight.");
        }
        output.writeVarInt(this.secondCharacterCurrentWeight);
        if(this.secondCharacterMaxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.secondCharacterMaxWeight + ") on element secondCharacterMaxWeight.");
        }
        output.writeVarInt(this.secondCharacterMaxWeight);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartedWithPodsMessage(input);
    }

    private deserializeAs_ExchangeStartedWithPodsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._firstCharacterIdFunc(input);
        this._firstCharacterCurrentWeightFunc(input);
        this._firstCharacterMaxWeightFunc(input);
        this._secondCharacterIdFunc(input);
        this._secondCharacterCurrentWeightFunc(input);
        this._secondCharacterMaxWeightFunc(input);
    }

    private _firstCharacterIdFunc(input: ICustomDataInput)
    {
        this.firstCharacterId = input.readDouble();
        if(this.firstCharacterId < -9007199254740992 || this.firstCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.firstCharacterId + ") on element of ExchangeStartedWithPodsMessage.firstCharacterId.");
        }
    }

    private _firstCharacterCurrentWeightFunc(input: ICustomDataInput)
    {
        this.firstCharacterCurrentWeight = input.readVarUhInt();
        if(this.firstCharacterCurrentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.firstCharacterCurrentWeight + ") on element of ExchangeStartedWithPodsMessage.firstCharacterCurrentWeight.");
        }
    }

    private _firstCharacterMaxWeightFunc(input: ICustomDataInput)
    {
        this.firstCharacterMaxWeight = input.readVarUhInt();
        if(this.firstCharacterMaxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.firstCharacterMaxWeight + ") on element of ExchangeStartedWithPodsMessage.firstCharacterMaxWeight.");
        }
    }

    private _secondCharacterIdFunc(input: ICustomDataInput)
    {
        this.secondCharacterId = input.readDouble();
        if(this.secondCharacterId < -9007199254740992 || this.secondCharacterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.secondCharacterId + ") on element of ExchangeStartedWithPodsMessage.secondCharacterId.");
        }
    }

    private _secondCharacterCurrentWeightFunc(input: ICustomDataInput)
    {
        this.secondCharacterCurrentWeight = input.readVarUhInt();
        if(this.secondCharacterCurrentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.secondCharacterCurrentWeight + ") on element of ExchangeStartedWithPodsMessage.secondCharacterCurrentWeight.");
        }
    }

    private _secondCharacterMaxWeightFunc(input: ICustomDataInput)
    {
        this.secondCharacterMaxWeight = input.readVarUhInt();
        if(this.secondCharacterMaxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.secondCharacterMaxWeight + ") on element of ExchangeStartedWithPodsMessage.secondCharacterMaxWeight.");
        }
    }

}