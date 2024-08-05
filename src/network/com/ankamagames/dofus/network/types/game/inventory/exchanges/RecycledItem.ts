import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class RecycledItem
{

	public static readonly protocolId: number = 2736;

	public id: number = 0;
	public qty: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RecycledItem(input);
    }

    private deserializeAs_RecycledItem(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._qtyFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of RecycledItem.id.");
        }
    }

    private _qtyFunc(input: ICustomDataInput)
    {
        this.qty = input.readUnsignedInt();
        if(this.qty < 0 || this.qty > 4294967295)
        {
            throw new Error("Forbidden value (" + this.qty + ") on element of RecycledItem.qty.");
        }
    }

}