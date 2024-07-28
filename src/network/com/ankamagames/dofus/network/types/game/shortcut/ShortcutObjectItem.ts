import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ShortcutObject } from "./ShortcutObject";

export class ShortcutObjectItem extends ShortcutObject
{

	public static readonly protocolId: number = 2079;

	public itemUID: number = 0;
	public itemGID: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutObjectItem(input);
    }

    private deserializeAs_ShortcutObjectItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._itemUIDFunc(input);
        this._itemGIDFunc(input);
    }

    private _itemUIDFunc(input: ICustomDataInput)
    {
        this.itemUID = input.readInt();
    }

    private _itemGIDFunc(input: ICustomDataInput)
    {
        this.itemGID = input.readInt();
    }

}