import { Uuid } from "./../../../../types/game/Uuid";
import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorPresetSpellUpdatedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2628;

	public presetId: Uuid;
	public taxCollectorSpells: Array<TaxCollectorOrderedSpell>;

    public constructor()
    {
        super();
        this.presetId = new Uuid();
        this.taxCollectorSpells = Array<TaxCollectorOrderedSpell>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorPresetSpellUpdatedMessage(input);
    }

    private deserializeAs_TaxCollectorPresetSpellUpdatedMessage(input: ICustomDataInput)
    {
        let _item2: TaxCollectorOrderedSpell;
        this.presetId = new Uuid();
        this.presetId.deserialize(input);
        let _taxCollectorSpellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _taxCollectorSpellsLen; _i2++)
        {
            _item2 = new TaxCollectorOrderedSpell();
            _item2.deserialize(input);
            this.taxCollectorSpells.push(_item2);
        }
    }

}