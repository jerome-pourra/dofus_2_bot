import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeKamaModifiedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4910;

	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeKamaModifiedMessage.protocolId;
    }

    public initExchangeKamaModifiedMessage(remote: boolean = false, quantity: number = 0): ExchangeKamaModifiedMessage
    {
        super.initExchangeObjectMessage(remote);
        this.quantity = quantity;
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
        this.serializeAs_ExchangeKamaModifiedMessage(output);
    }

    public serializeAs_ExchangeKamaModifiedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        if(this.quantity < 0 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarLong(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeKamaModifiedMessage(input);
    }

    private deserializeAs_ExchangeKamaModifiedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhLong();
        if(this.quantity < 0 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeKamaModifiedMessage.quantity.");
        }
    }

}