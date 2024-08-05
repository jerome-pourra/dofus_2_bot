import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SpellForPreset
{

	public static readonly protocolId: number = 1457;

	public spellId: number = 0;
	public shortcuts: Array<number>;

    public constructor()
    {
        this.shortcuts = Array<number>();
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