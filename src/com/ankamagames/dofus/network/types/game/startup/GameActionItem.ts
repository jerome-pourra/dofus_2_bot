import { ObjectItemInformationWithQuantity } from "./../data/items/ObjectItemInformationWithQuantity";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class GameActionItem implements INetworkType
{

	public static readonly protocolId: number = 7527;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public uid: number = 0;
	public title: string = "";
	public text: string = "";
	public descUrl: string = "";
	public pictureUrl: string = "";
	public items: Array<ObjectItemInformationWithQuantity>;

    public constructor()
    {
        this.items = Array<ObjectItemInformationWithQuantity>();
    }

    public getTypeId()
    {
        return GameActionItem.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionItem.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionItem.endpointServer;
    }

    public initGameActionItem(uid: number = 0, title: string = "", text: string = "", descUrl: string = "", pictureUrl: string = "", items: Array<ObjectItemInformationWithQuantity> = null): GameActionItem
    {
        this.uid = uid;
        this.title = title;
        this.text = text;
        this.descUrl = descUrl;
        this.pictureUrl = pictureUrl;
        this.items = items;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionItem(output);
    }

    public serializeAs_GameActionItem(output: ICustomDataOutput)
    {
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
        }
        output.writeInt(this.uid);
        output.writeUTF(this.title);
        output.writeUTF(this.text);
        output.writeUTF(this.descUrl);
        output.writeUTF(this.pictureUrl);
        output.writeShort(this.items.length);
        for(var _i6: number = 0; _i6 < this.items.length; _i6++)
        {
            (this.items[_i6] as ObjectItemInformationWithQuantity).serializeAs_ObjectItemInformationWithQuantity(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionItem(input);
    }

    private deserializeAs_GameActionItem(input: ICustomDataInput)
    {
        let _item6: ObjectItemInformationWithQuantity;
        this._uidFunc(input);
        this._titleFunc(input);
        this._textFunc(input);
        this._descUrlFunc(input);
        this._pictureUrlFunc(input);
        let _itemsLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _itemsLen; _i6++)
        {
            _item6 = new ObjectItemInformationWithQuantity();
            _item6.deserialize(input);
            this.items.push(_item6);
        }
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readInt();
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of GameActionItem.uid.");
        }
    }

    private _titleFunc(input: ICustomDataInput)
    {
        this.title = input.readUTF();
    }

    private _textFunc(input: ICustomDataInput)
    {
        this.text = input.readUTF();
    }

    private _descUrlFunc(input: ICustomDataInput)
    {
        this.descUrl = input.readUTF();
    }

    private _pictureUrlFunc(input: ICustomDataInput)
    {
        this.pictureUrl = input.readUTF();
    }

}