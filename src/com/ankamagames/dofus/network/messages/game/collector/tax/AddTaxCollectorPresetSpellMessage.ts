import { Uuid } from "./../../../../types/game/Uuid";
import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AddTaxCollectorPresetSpellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6564;

	public presetId: Uuid;
	public spell: TaxCollectorOrderedSpell;

    public constructor()
    {
        super();
        this.presetId = new Uuid();
        this.spell = new TaxCollectorOrderedSpell();
    }

    public getMessageId()
    {
        return AddTaxCollectorPresetSpellMessage.protocolId;
    }

    public initAddTaxCollectorPresetSpellMessage(presetId: Uuid = null, spell: TaxCollectorOrderedSpell = null): AddTaxCollectorPresetSpellMessage
    {
        this.presetId = presetId;
        this.spell = spell;
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
        this.serializeAs_AddTaxCollectorPresetSpellMessage(output);
    }

    public serializeAs_AddTaxCollectorPresetSpellMessage(output: ICustomDataOutput)
    {
        this.presetId.serializeAs_Uuid(output);
        this.spell.serializeAs_TaxCollectorOrderedSpell(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AddTaxCollectorPresetSpellMessage(input);
    }

    private deserializeAs_AddTaxCollectorPresetSpellMessage(input: ICustomDataInput)
    {
        this.presetId = new Uuid();
        this.presetId.deserialize(input);
        this.spell = new TaxCollectorOrderedSpell();
        this.spell.deserialize(input);
    }

}