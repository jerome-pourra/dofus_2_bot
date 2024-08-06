import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeSellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4616;

	public objectToSellId: number = 0;
	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeSellMessage.protocolId;
    }

    public initExchangeSellMessage(objectToSellId: number = 0, quantity: number = 0): ExchangeSellMessage
    {
        this.objectToSellId = objectToSellId;
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
        this.serializeAs_ExchangeSellMessage(output);
    }

    public serializeAs_ExchangeSellMessage(output: ICustomDataOutput)
    {
        if(this.objectToSellId < 0)
        {
            throw new Error("Forbidden value (" + this.objectToSellId + ") on element objectToSellId.");
        }
        output.writeVarInt(this.objectToSellId);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeSellMessage(input);
    }

    private deserializeAs_ExchangeSellMessage(input: ICustomDataInput)
    {
        this._objectToSellIdFunc(input);
        this._quantityFunc(input);
    }

    private _objectToSellIdFunc(input: ICustomDataInput)
    {
        this.objectToSellId = input.readVarUhInt();
        if(this.objectToSellId < 0)
        {
            throw new Error("Forbidden value (" + this.objectToSellId + ") on element of ExchangeSellMessage.objectToSellId.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeSellMessage.quantity.");
        }
    }

}