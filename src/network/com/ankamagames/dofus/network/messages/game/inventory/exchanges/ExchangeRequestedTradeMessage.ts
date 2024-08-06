import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeRequestedMessage } from "./ExchangeRequestedMessage";

export class ExchangeRequestedTradeMessage extends ExchangeRequestedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5103;

	public source: number = 0;
	public target: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeRequestedTradeMessage.protocolId;
    }

    public initExchangeRequestedTradeMessage(exchangeType: number = 0, source: number = 0, target: number = 0): ExchangeRequestedTradeMessage
    {
        super.initExchangeRequestedMessage(exchangeType);
        this.source = source;
        this.target = target;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeRequestedTradeMessage(output);
    }

    public serializeAs_ExchangeRequestedTradeMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeRequestedMessage(output);
        if(this.source < 0 || this.source > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.source + ") on element source.");
        }
        output.writeVarLong(this.source);
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element target.");
        }
        output.writeVarLong(this.target);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeRequestedTradeMessage(input);
    }

    private deserializeAs_ExchangeRequestedTradeMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._sourceFunc(input);
        this._targetFunc(input);
    }

    private _sourceFunc(input: ICustomDataInput)
    {
        this.source = input.readVarUhLong();
        if(this.source < 0 || this.source > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.source + ") on element of ExchangeRequestedTradeMessage.source.");
        }
    }

    private _targetFunc(input: ICustomDataInput)
    {
        this.target = input.readVarUhLong();
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element of ExchangeRequestedTradeMessage.target.");
        }
    }

}