import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SpellForPreset } from "./SpellForPreset";
import { Preset } from "./Preset";

export class SpellsPreset extends Preset implements INetworkType
{

	public static readonly protocolId: number = 7774;

	public spells: Array<SpellForPreset>;

    public constructor()
    {
        super();
        this.spells = Array<SpellForPreset>();
    }

    public getTypeId()
    {
        return SpellsPreset.protocolId;
    }

    public initSpellsPreset(id: number = 0, spells: Array<SpellForPreset> = null): SpellsPreset
    {
        super.initPreset(id);
        this.spells = spells;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpellsPreset(output);
    }

    public serializeAs_SpellsPreset(output: ICustomDataOutput)
    {
        super.serializeAs_Preset(output);
        output.writeShort(this.spells.length);
        for(var _i1: number = 0; _i1 < this.spells.length; _i1++)
        {
            (this.spells[_i1] as SpellForPreset).serializeAs_SpellForPreset(output);
        }
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