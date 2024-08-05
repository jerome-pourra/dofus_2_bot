import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SpellsPreset } from "./SpellsPreset";
import { SpellForPreset } from "./SpellForPreset";
import { Preset } from "./Preset";

export class ForgettableSpellsPreset extends Preset
{

	public static readonly protocolId: number = 6253;

	public baseSpellsPreset: SpellsPreset;
	public forgettableSpells: Array<SpellForPreset>;

    public constructor()
    {
        super();
        this.baseSpellsPreset = new SpellsPreset();
        this.forgettableSpells = Array<SpellForPreset>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForgettableSpellsPreset(input);
    }

    private deserializeAs_ForgettableSpellsPreset(input: ICustomDataInput)
    {
        let _item2: SpellForPreset;
        super.deserialize(input);
        this.baseSpellsPreset = new SpellsPreset();
        this.baseSpellsPreset.deserialize(input);
        let _forgettableSpellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _forgettableSpellsLen; _i2++)
        {
            _item2 = new SpellForPreset();
            _item2.deserialize(input);
            this.forgettableSpells.push(_item2);
        }
    }

}