import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityLook } from "./EntityLook";

export class IndexedEntityLook
{

	public static readonly protocolId: number = 5735;

	public look: EntityLook;
	public index: number = 0;

    public constructor()
    {
        this.look = new EntityLook();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IndexedEntityLook(input);
    }

    private deserializeAs_IndexedEntityLook(input: ICustomDataInput)
    {
        this.look = new EntityLook();
        this.look.deserialize(input);
        this._indexFunc(input);
    }

    private _indexFunc(input: ICustomDataInput)
    {
        this.index = input.readByte();
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element of IndexedEntityLook.index.");
        }
    }

}