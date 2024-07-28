import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftPaymentModificationRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2392;

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
        this.deserializeAs_ExchangeCraftPaymentModificationRequestMessage(input);
    }

    private deserializeAs_ExchangeCraftPaymentModificationRequestMessage(input: ICustomDataInput)
    {
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhLong();
        if(this.quantity < 0 || this.quantity > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeCraftPaymentModificationRequestMessage.quantity.");
        }
    }

}