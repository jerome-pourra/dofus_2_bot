import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SpellForPreset implements INetworkType
{

	public static readonly protocolId: number = 1457;

	public spellId: number = 0;
	public shortcuts: Array<number>;

    public constructor()
    {
        this.shortcuts = Array<number>();
    }

    public getTypeId()
    {
        return SpellForPreset.protocolId;
    }

    public initSpellForPreset(spellId: number = 0, shortcuts: Array<number> = null): SpellForPreset
    {
        this.spellId = spellId;
        this.shortcuts = shortcuts;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpellForPreset(output);
    }

    public serializeAs_SpellForPreset(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeVarShort(this.spellId);
        output.writeShort(this.shortcuts.length);
        for(var _i2: number = 0; _i2 < this.shortcuts.length; _i2++)
        {
            output.writeShort(this.shortcuts[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpellForPreset(input);
    }

    private deserializeAs_SpellForPreset(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._spellIdFunc(input);
        let _shortcutsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _shortcutsLen; _i2++)
        {
            _val2 = input.readShort();
            this.shortcuts.push(_val2);
        }
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhShort();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of SpellForPreset.spellId.");
        }
    }

}