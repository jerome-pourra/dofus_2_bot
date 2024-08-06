import { Uuid } from "./../../../../types/game/Uuid";
import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorPresetSpellUpdatedMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return TaxCollectorPresetSpellUpdatedMessage.protocolId;
    }

    public initTaxCollectorPresetSpellUpdatedMessage(presetId: Uuid = null, taxCollectorSpells: Array<TaxCollectorOrderedSpell> = null): TaxCollectorPresetSpellUpdatedMessage
    {
        this.presetId = presetId;
        this.taxCollectorSpells = taxCollectorSpells;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TaxCollectorPresetSpellUpdatedMessage(output);
    }

    public serializeAs_TaxCollectorPresetSpellUpdatedMessage(output: ICustomDataOutput)
    {
        this.presetId.serializeAs_Uuid(output);
        output.writeShort(this.taxCollectorSpells.length);
        for(var _i2: number = 0; _i2 < this.taxCollectorSpells.length; _i2++)
        {
            (this.taxCollectorSpells[_i2] as TaxCollectorOrderedSpell).serializeAs_TaxCollectorOrderedSpell(output);
        }
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