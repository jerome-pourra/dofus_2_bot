import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeObjectMoveMessage } from "./ExchangeObjectMoveMessage";

export class ExchangeObjectMovePricedMessage extends ExchangeObjectMoveMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3566;

	public price: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeObjectMovePricedMessage.protocolId;
    }

    public initExchangeObjectMovePricedMessage(objectUID: number = 0, quantity: number = 0, price: number = 0): ExchangeObjectMovePricedMessage
    {
        super.initExchangeObjectMoveMessage(objectUID,quantity);
        this.price = price;
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
        this.serializeAs_ExchangeObjectMovePricedMessage(output);
    }

    public serializeAs_ExchangeObjectMovePricedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMoveMessage(output);
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element price.");
        }
        output.writeVarLong(this.price);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectMovePricedMessage(input);
    }

    private deserializeAs_ExchangeObjectMovePricedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._priceFunc(input);
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of ExchangeObjectMovePricedMessage.price.");
        }
    }

}