import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class ItemForPreset implements INetworkType
{

	public static readonly protocolId: number = 5291;

	public position: number = 63;
	public objGid: number = 0;
	public objUid: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ItemForPreset.protocolId;
    }

    public initItemForPreset(position: number = 63, objGid: number = 0, objUid: number = 0): ItemForPreset
    {
        this.position = position;
        this.objGid = objGid;
        this.objUid = objUid;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ItemForPreset(output);
    }

    public serializeAs_ItemForPreset(output: ICustomDataOutput)
    {
        output.writeShort(this.position);
        if(this.objGid < 0)
        {
            throw new Error("Forbidden value (" + this.objGid + ") on element objGid.");
        }
        output.writeVarInt(this.objGid);
        if(this.objUid < 0)
        {
            throw new Error("Forbidden value (" + this.objUid + ") on element objUid.");
        }
        output.writeVarInt(this.objUid);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ItemForPreset(input);
    }

    private deserializeAs_ItemForPreset(input: ICustomDataInput)
    {
        this._positionFunc(input);
        this._objGidFunc(input);
        this._objUidFunc(input);
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readShort();
        if(this.position < 0)
        {
            throw new Error("Forbidden value (" + this.position + ") on element of ItemForPreset.position.");
        }
    }

    private _objGidFunc(input: ICustomDataInput)
    {
        this.objGid = input.readVarUhInt();
        if(this.objGid < 0)
        {
            throw new Error("Forbidden value (" + this.objGid + ") on element of ItemForPreset.objGid.");
        }
    }

    private _objUidFunc(input: ICustomDataInput)
    {
        this.objUid = input.readVarUhInt();
        if(this.objUid < 0)
        {
            throw new Error("Forbidden value (" + this.objUid + ") on element of ItemForPreset.objUid.");
        }
    }

}