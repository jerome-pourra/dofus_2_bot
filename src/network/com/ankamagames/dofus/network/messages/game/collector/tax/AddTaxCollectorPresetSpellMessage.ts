import { Uuid } from "./../../../../types/game/Uuid";
import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AddTaxCollectorPresetSpellMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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