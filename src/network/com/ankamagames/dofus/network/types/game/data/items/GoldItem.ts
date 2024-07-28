import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class GoldItem extends Item
{

	public static readonly protocolId: number = 8076;

	public sum: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GoldItem(input);
    }

    private deserializeAs_GoldItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._sumFunc(input);
    }

    private _sumFunc(input: ICustomDataInput)
    {
        this.sum = input.readVarUhLong();
        if(this.sum < 0 || this.sum > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sum + ") on element of GoldItem.sum.");
        }
    }

}