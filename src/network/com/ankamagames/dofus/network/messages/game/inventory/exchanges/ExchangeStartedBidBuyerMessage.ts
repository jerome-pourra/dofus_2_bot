import { SellerBuyerDescriptor } from "./../../../../types/game/data/items/SellerBuyerDescriptor";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedBidBuyerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4280;

	public buyerDescriptor: SellerBuyerDescriptor;

    public constructor()
    {
        super();
        this.buyerDescriptor = new SellerBuyerDescriptor();
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
        this.deserializeAs_ExchangeStartedBidBuyerMessage(input);
    }

    private deserializeAs_ExchangeStartedBidBuyerMessage(input: ICustomDataInput)
    {
        this.buyerDescriptor = new SellerBuyerDescriptor();
        this.buyerDescriptor.deserialize(input);
    }

}