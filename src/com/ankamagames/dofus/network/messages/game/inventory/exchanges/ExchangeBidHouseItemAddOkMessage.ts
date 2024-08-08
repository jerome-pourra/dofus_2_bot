import { ObjectItemToSellInBid } from "./../../../../types/game/data/items/ObjectItemToSellInBid";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseItemAddOkMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1557;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public itemInfo: ObjectItemToSellInBid;

    public constructor()
    {
        super();
        this.itemInfo = new ObjectItemToSellInBid();
    }

    public getMessageId()
    {
        return ExchangeBidHouseItemAddOkMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseItemAddOkMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseItemAddOkMessage.endpointServer;
    }

    public initExchangeBidHouseItemAddOkMessage(itemInfo: ObjectItemToSellInBid = null): ExchangeBidHouseItemAddOkMessage
    {
        this.itemInfo = itemInfo;
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
        this.serializeAs_ExchangeBidHouseItemAddOkMessage(output);
    }

    public serializeAs_ExchangeBidHouseItemAddOkMessage(output: ICustomDataOutput)
    {
        this.itemInfo.serializeAs_ObjectItemToSellInBid(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseItemAddOkMessage(input);
    }

    private deserializeAs_ExchangeBidHouseItemAddOkMessage(input: ICustomDataInput)
    {
        this.itemInfo = new ObjectItemToSellInBid();
        this.itemInfo.deserialize(input);
    }

}