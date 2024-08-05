import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class SpellItem extends Item
{

	public static readonly protocolId: number = 8615;

	public spellId: number = 0;
	public spellLevel: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpellItem(input);
    }

    private deserializeAs_SpellItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._spellIdFunc(input);
        this._spellLevelFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readInt();
    }

    private _spellLevelFunc(input: ICustomDataInput)
    {
        this.spellLevel = input.readShort();
        if(this.spellLevel < 1 || this.spellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.spellLevel + ") on element of SpellItem.spellLevel.");
        }
    }

}