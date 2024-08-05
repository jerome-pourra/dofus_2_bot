import { ObjectItemInRolePlay } from "./../context/roleplay/ObjectItemInRolePlay";
import { ItemDurability } from "./../mount/ItemDurability";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockItem extends ObjectItemInRolePlay
{

	public static readonly protocolId: number = 2373;

	public durability: ItemDurability;

    public constructor()
    {
        super();
        this.durability = new ItemDurability();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockItem(input);
    }

    private deserializeAs_PaddockItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.durability = new ItemDurability();
        this.durability.deserialize(input);
    }

}