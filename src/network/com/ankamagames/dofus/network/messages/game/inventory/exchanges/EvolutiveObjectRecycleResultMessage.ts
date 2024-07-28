import { RecycledItem } from "./../../../../types/game/inventory/exchanges/RecycledItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class EvolutiveObjectRecycleResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5637;

	public recycledItems: Array<RecycledItem>;

    public constructor()
    {
        super();
        this.recycledItems = Array<RecycledItem>();
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