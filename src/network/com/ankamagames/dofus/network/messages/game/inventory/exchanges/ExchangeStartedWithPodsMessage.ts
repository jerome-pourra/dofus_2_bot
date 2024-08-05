import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartedMessage } from "./ExchangeStartedMessage";

export class ExchangeStartedWithPodsMessage extends ExchangeStartedMessage
{

	public static readonly protocolId: number = 5028;

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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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