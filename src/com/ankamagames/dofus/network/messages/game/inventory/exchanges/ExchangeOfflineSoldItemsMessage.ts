import { ObjectItemQuantityPriceDateEffects } from "./../../../../types/game/data/items/ObjectItemQuantityPriceDateEffects";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeOfflineSoldItemsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2524;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public bidHouseItems: Array<ObjectItemQuantityPriceDateEffects>;

    public constructor()
    {
        super();
        this.bidHouseItems = Array<ObjectItemQuantityPriceDateEffects>();
    }

    public getMessageId()
    {
        return ExchangeOfflineSoldItemsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeOfflineSoldItemsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeOfflineSoldItemsMessage.endpointServer;
    }

    public initExchangeOfflineSoldItemsMessage(bidHouseItems: Array<ObjectItemQuantityPriceDateEffects> = null): ExchangeOfflineSoldItemsMessage
    {
        this.bidHouseItems = bidHouseItems;
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
        this.serializeAs_ExchangeOfflineSoldItemsMessage(output);
    }

    public serializeAs_ExchangeOfflineSoldItemsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.bidHouseItems.length);
        for(var _i1: number = 0; _i1 < this.bidHouseItems.length; _i1++)
        {
            (this.bidHouseItems[_i1] as ObjectItemQuantityPriceDateEffects).serializeAs_ObjectItemQuantityPriceDateEffects(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeOfflineSoldItemsMessage(input);
    }

    private deserializeAs_ExchangeOfflineSoldItemsMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItemQuantityPriceDateEffects;
        let _bidHouseItemsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _bidHouseItemsLen; _i1++)
        {
            _item1 = new ObjectItemQuantityPriceDateEffects();
            _item1.deserialize(input);
            this.bidHouseItems.push(_item1);
        }
    }

}