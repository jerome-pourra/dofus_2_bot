import { ObjectItemToSellInBid } from "./../../../../types/game/data/items/ObjectItemToSellInBid";
import { SellerBuyerDescriptor } from "./../../../../types/game/data/items/SellerBuyerDescriptor";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedBidSellerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9278;

	public sellerDescriptor: SellerBuyerDescriptor;
	public objectsInfos: Array<ObjectItemToSellInBid>;

    public constructor()
    {
        super();
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.objectsInfos = Array<ObjectItemToSellInBid>();
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
        this.deserializeAs_ExchangeStartedBidSellerMessage(input);
    }

    private deserializeAs_ExchangeStartedBidSellerMessage(input: ICustomDataInput)
    {
        let _item2: ObjectItemToSellInBid;
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.sellerDescriptor.deserialize(input);
        let _objectsInfosLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _objectsInfosLen; _i2++)
        {
            _item2 = new ObjectItemToSellInBid();
            _item2.deserialize(input);
            this.objectsInfos.push(_item2);
        }
    }

}