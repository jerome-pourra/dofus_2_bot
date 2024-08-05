import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpellItem } from "./SpellItem";

export class ForgettableSpellItem extends SpellItem
{

	public static readonly protocolId: number = 2798;

	public available: boolean = false;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForgettableSpellItem(input);
    }

    private deserializeAs_ForgettableSpellItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._availableFunc(input);
    }

    private _availableFunc(input: ICustomDataInput)
    {
        this.available = input.readBoolean();
    }

}