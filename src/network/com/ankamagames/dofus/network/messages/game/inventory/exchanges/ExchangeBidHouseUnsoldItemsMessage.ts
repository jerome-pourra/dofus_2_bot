import { ObjectItemGenericQuantity } from "./../../../../types/game/data/items/ObjectItemGenericQuantity";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidHouseUnsoldItemsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9295;

	public items: Array<ObjectItemGenericQuantity>;

    public constructor()
    {
        super();
        this.items = Array<ObjectItemGenericQuantity>();
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