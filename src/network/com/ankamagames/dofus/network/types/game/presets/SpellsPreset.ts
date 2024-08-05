import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SpellForPreset } from "./SpellForPreset";
import { Preset } from "./Preset";

export class SpellsPreset extends Preset
{

	public static readonly protocolId: number = 7774;

	public spells: Array<SpellForPreset>;

    public constructor()
    {
        super();
        this.spells = Array<SpellForPreset>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpellsPreset(input);
    }

    private deserializeAs_SpellsPreset(input: ICustomDataInput)
    {
        let _item1: SpellForPreset;
        super.deserialize(input);
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _spellsLen; _i1++)
        {
            _item1 = new SpellForPreset();
            _item1.deserialize(input);
            this.spells.push(_item1);
        }
    }

}