import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class SpellItem extends Item implements INetworkType
{

	public static readonly protocolId: number = 8615;

	public spellId: number = 0;
	public spellLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SpellItem.protocolId;
    }

    public initSpellItem(spellId: number = 0, spellLevel: number = 0): SpellItem
    {
        this.spellId = spellId;
        this.spellLevel = spellLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpellItem(output);
    }

    public serializeAs_SpellItem(output: ICustomDataOutput)
    {
        super.serializeAs_Item(output);
        output.writeInt(this.spellId);
        if(this.spellLevel < 1 || this.spellLevel > 32767)
        {
            throw new Error("Forbidden value (" + this.spellLevel + ") on element spellLevel.");
        }
        output.writeShort(this.spellLevel);
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