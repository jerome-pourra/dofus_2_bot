import { ObjectItemToSellInBid } from "./../../../../types/game/data/items/ObjectItemToSellInBid";
import { SellerBuyerDescriptor } from "./../../../../types/game/data/items/SellerBuyerDescriptor";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedBidSellerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9278;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public sellerDescriptor: SellerBuyerDescriptor;
	public objectsInfos: Array<ObjectItemToSellInBid>;

    public constructor()
    {
        super();
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.objectsInfos = Array<ObjectItemToSellInBid>();
    }

    public getMessageId()
    {
        return ExchangeStartedBidSellerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartedBidSellerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartedBidSellerMessage.endpointServer;
    }

    public initExchangeStartedBidSellerMessage(sellerDescriptor: SellerBuyerDescriptor = null, objectsInfos: Array<ObjectItemToSellInBid> = null): ExchangeStartedBidSellerMessage
    {
        this.sellerDescriptor = sellerDescriptor;
        this.objectsInfos = objectsInfos;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeStartedBidSellerMessage(output);
    }

    public serializeAs_ExchangeStartedBidSellerMessage(output: ICustomDataOutput)
    {
        this.sellerDescriptor.serializeAs_SellerBuyerDescriptor(output);
        output.writeShort(this.objectsInfos.length);
        for(var _i2: number = 0; _i2 < this.objectsInfos.length; _i2++)
        {
            (this.objectsInfos[_i2] as ObjectItemToSellInBid).serializeAs_ObjectItemToSellInBid(output);
        }
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