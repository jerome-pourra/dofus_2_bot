import { ObjectItemInRolePlay } from "./../context/roleplay/ObjectItemInRolePlay";
import { ItemDurability } from "./../mount/ItemDurability";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockItem extends ObjectItemInRolePlay implements INetworkType
{

	public static readonly protocolId: number = 2373;

	public durability: ItemDurability;

    public constructor()
    {
        super();
        this.durability = new ItemDurability();
    }

    public getTypeId()
    {
        return PaddockItem.protocolId;
    }

    public initPaddockItem(cellId: number = 0, objectGID: number = 0, durability: ItemDurability = null): PaddockItem
    {
        super.initObjectItemInRolePlay(cellId,objectGID);
        this.durability = durability;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockItem(output);
    }

    public serializeAs_PaddockItem(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectItemInRolePlay(output);
        this.durability.serializeAs_ItemDurability(output);
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