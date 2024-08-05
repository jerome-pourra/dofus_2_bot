import { Uuid } from "./../../Uuid";
import { CharacterCharacteristics } from "./../../character/characteristic/CharacterCharacteristics";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { TaxCollectorOrderedSpell } from "./TaxCollectorOrderedSpell";

export class TaxCollectorPreset
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