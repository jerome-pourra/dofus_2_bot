import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PaddockSellRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6528;

	public price: number = 0;
	public forSale: boolean = false;

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
        this.deserializeAs_PaddockSellRequestMessage(input);
    }

    private deserializeAs_PaddockSellRequestMessage(input: ICustomDataInput)
    {
        this._priceFunc(input);
        this._forSaleFunc(input);
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of PaddockSellRequestMessage.price.");
        }
    }

    private _forSaleFunc(input: ICustomDataInput)
    {
        this.forSale = input.readBoolean();
    }

}