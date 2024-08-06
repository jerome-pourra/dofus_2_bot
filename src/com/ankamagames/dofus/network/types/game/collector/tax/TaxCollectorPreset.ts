import { Uuid } from "./../../Uuid";
import { CharacterCharacteristics } from "./../../character/characteristic/CharacterCharacteristics";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { TaxCollectorOrderedSpell } from "./TaxCollectorOrderedSpell";

export class TaxCollectorPreset implements INetworkType
{

	public static readonly protocolId: number = 1854;

	public presetId: Uuid;
	public spells: Array<TaxCollectorOrderedSpell>;
	public characteristics: CharacterCharacteristics;

    public constructor()
    {
        this.presetId = new Uuid();
        this.spells = Array<TaxCollectorOrderedSpell>();
        this.characteristics = new CharacterCharacteristics();
    }

    public getTypeId()
    {
        return TaxCollectorPreset.protocolId;
    }

    public initTaxCollectorPreset(presetId: Uuid = null, spells: Array<TaxCollectorOrderedSpell> = null, characteristics: CharacterCharacteristics = null): TaxCollectorPreset
    {
        this.presetId = presetId;
        this.spells = spells;
        this.characteristics = characteristics;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TaxCollectorPreset(output);
    }

    public serializeAs_TaxCollectorPreset(output: ICustomDataOutput)
    {
        this.presetId.serializeAs_Uuid(output);
        output.writeShort(this.spells.length);
        for(var _i2: number = 0; _i2 < this.spells.length; _i2++)
        {
            (this.spells[_i2] as TaxCollectorOrderedSpell).serializeAs_TaxCollectorOrderedSpell(output);
        }
        this.characteristics.serializeAs_CharacterCharacteristics(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorPreset(input);
    }

    private deserializeAs_TaxCollectorPreset(input: ICustomDataInput)
    {
        let _item2: TaxCollectorOrderedSpell;
        this.presetId = new Uuid();
        this.presetId.deserialize(input);
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _spellsLen; _i2++)
        {
            _item2 = new TaxCollectorOrderedSpell();
            _item2.deserialize(input);
            this.spells.push(_item2);
        }
        this.characteristics = new CharacterCharacteristics();
        this.characteristics.deserialize(input);
    }

}