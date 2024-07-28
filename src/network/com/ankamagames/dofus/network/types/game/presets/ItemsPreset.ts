import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ItemForPreset } from "./ItemForPreset";
import { Preset } from "./Preset";

export class ItemsPreset extends Preset
{

	public static readonly protocolId: number = 4783;

	public items: Array<ItemForPreset>;
	public mountEquipped: boolean = false;
	public look: EntityLook;

    public constructor()
    {
        super();
        this.items = Array<ItemForPreset>();
        this.look = new EntityLook();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ItemsPreset(input);
    }

    private deserializeAs_ItemsPreset(input: ICustomDataInput)
    {
        let _item1: ItemForPreset;
        super.deserialize(input);
        let _itemsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _itemsLen; _i1++)
        {
            _item1 = new ItemForPreset();
            _item1.deserialize(input);
            this.items.push(_item1);
        }
        this._mountEquippedFunc(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

    private _mountEquippedFunc(input: ICustomDataInput)
    {
        this.mountEquipped = input.readBoolean();
    }

}