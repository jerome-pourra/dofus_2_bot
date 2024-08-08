import { ObjectItemGenericQuantity } from "./../../../../types/game/data/items/ObjectItemGenericQuantity";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseUnsoldItemsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9295;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public items: Array<ObjectItemGenericQuantity>;

    public constructor()
    {
        super();
        this.items = Array<ObjectItemGenericQuantity>();
    }

    public getMessageId()
    {
        return ExchangeBidHouseUnsoldItemsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidHouseUnsoldItemsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidHouseUnsoldItemsMessage.endpointServer;
    }

    public initExchangeBidHouseUnsoldItemsMessage(items: Array<ObjectItemGenericQuantity> = null): ExchangeBidHouseUnsoldItemsMessage
    {
        this.items = items;
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
        this.serializeAs_ExchangeBidHouseUnsoldItemsMessage(output);
    }

    public serializeAs_ExchangeBidHouseUnsoldItemsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.items.length);
        for(var _i1: number = 0; _i1 < this.items.length; _i1++)
        {
            (this.items[_i1] as ObjectItemGenericQuantity).serializeAs_ObjectItemGenericQuantity(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidHouseUnsoldItemsMessage(input);
    }

    private deserializeAs_ExchangeBidHouseUnsoldItemsMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItemGenericQuantity;
        let _itemsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _itemsLen; _i1++)
        {
            _item1 = new ObjectItemGenericQuantity();
            _item1.deserialize(input);
            this.items.push(_item1);
        }
    }

}