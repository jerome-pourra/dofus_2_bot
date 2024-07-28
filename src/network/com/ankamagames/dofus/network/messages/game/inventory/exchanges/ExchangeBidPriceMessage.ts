import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidPriceMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4274;

	public genericId: number = 0;
	public averagePrice: number = 0;

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
        this.deserializeAs_ExchangeBidPriceMessage(input);
    }

    private deserializeAs_ExchangeBidPriceMessage(input: ICustomDataInput)
    {
        this._genericIdFunc(input);
        this._averagePriceFunc(input);
    }

    private _genericIdFunc(input: ICustomDataInput)
    {
        this.genericId = input.readVarUhInt();
        if(this.genericId < 0)
        {
            throw new Error("Forbidden value (" + this.genericId + ") on element of ExchangeBidPriceMessage.genericId.");
        }
    }

    private _averagePriceFunc(input: ICustomDataInput)
    {
        this.averagePrice = input.readVarLong();
        if(this.averagePrice < -9007199254740992 || this.averagePrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.averagePrice + ") on element of ExchangeBidPriceMessage.averagePrice.");
        }
    }

}