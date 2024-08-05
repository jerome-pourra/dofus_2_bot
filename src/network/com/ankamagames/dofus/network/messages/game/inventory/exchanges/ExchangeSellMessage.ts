import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeSellMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4616;

	public objectToSellId: number = 0;
	public quantity: number = 0;

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