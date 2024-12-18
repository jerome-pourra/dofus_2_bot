import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { ShortcutObject } from "./ShortcutObject";

export class ShortcutObjectItem extends ShortcutObject implements INetworkType
{

	public static readonly protocolId: number = 2079;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public itemUID: number = 0;
	public itemGID: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ShortcutObjectItem.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutObjectItem.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutObjectItem.endpointServer;
    }

    public initShortcutObjectItem(slot: number = 0, itemUID: number = 0, itemGID: number = 0): ShortcutObjectItem
    {
        super.initShortcutObject(slot);
        this.itemUID = itemUID;
        this.itemGID = itemGID;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShortcutObjectItem(output);
    }

    public serializeAs_ShortcutObjectItem(output: ICustomDataOutput)
    {
        super.serializeAs_ShortcutObject(output);
        output.writeInt(this.itemUID);
        output.writeInt(this.itemGID);
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