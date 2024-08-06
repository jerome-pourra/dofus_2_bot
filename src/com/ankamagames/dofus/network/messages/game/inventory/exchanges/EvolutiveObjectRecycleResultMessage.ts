import { RecycledItem } from "./../../../../types/game/inventory/exchanges/RecycledItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class EvolutiveObjectRecycleResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5637;

	public recycledItems: Array<RecycledItem>;

    public constructor()
    {
        super();
        this.recycledItems = Array<RecycledItem>();
    }

    public getMessageId()
    {
        return EvolutiveObjectRecycleResultMessage.protocolId;
    }

    public initEvolutiveObjectRecycleResultMessage(recycledItems: Array<RecycledItem> = null): EvolutiveObjectRecycleResultMessage
    {
        this.recycledItems = recycledItems;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_EvolutiveObjectRecycleResultMessage(output);
    }

    public serializeAs_EvolutiveObjectRecycleResultMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.recycledItems.length);
        for(var _i1: number = 0; _i1 < this.recycledItems.length; _i1++)
        {
            (this.recycledItems[_i1] as RecycledItem).serializeAs_RecycledItem(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EvolutiveObjectRecycleResultMessage(input);
    }

    private deserializeAs_EvolutiveObjectRecycleResultMessage(input: ICustomDataInput)
    {
        let _item1: RecycledItem;
        let _recycledItemsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _recycledItemsLen; _i1++)
        {
            _item1 = new RecycledItem();
            _item1.deserialize(input);
            this.recycledItems.push(_item1);
        }
    }

}