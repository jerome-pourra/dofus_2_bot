import { SellerBuyerDescriptor } from "./../../../../types/game/data/items/SellerBuyerDescriptor";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedBidBuyerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4280;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public buyerDescriptor: SellerBuyerDescriptor;

    public constructor()
    {
        super();
        this.buyerDescriptor = new SellerBuyerDescriptor();
    }

    public getMessageId()
    {
        return ExchangeStartedBidBuyerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartedBidBuyerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartedBidBuyerMessage.endpointServer;
    }

    public initExchangeStartedBidBuyerMessage(buyerDescriptor: SellerBuyerDescriptor = null): ExchangeStartedBidBuyerMessage
    {
        this.buyerDescriptor = buyerDescriptor;
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
        this.serializeAs_ExchangeStartedBidBuyerMessage(output);
    }

    public serializeAs_ExchangeStartedBidBuyerMessage(output: ICustomDataOutput)
    {
        this.buyerDescriptor.serializeAs_SellerBuyerDescriptor(output);
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