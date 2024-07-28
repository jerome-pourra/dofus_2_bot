import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AddTaxCollectorOrderedSpellMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8298;

	public taxCollectorId: number = 0;
	public spell: TaxCollectorOrderedSpell;

    public constructor()
    {
        super();
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
        this.deserializeAs_AddTaxCollectorOrderedSpellMessage(input);
    }

    private deserializeAs_AddTaxCollectorOrderedSpellMessage(input: ICustomDataInput)
    {
        this._taxCollectorIdFunc(input);
        this.spell = new TaxCollectorOrderedSpell();
        this.spell.deserialize(input);
    }

    private _taxCollectorIdFunc(input: ICustomDataInput)
    {
        this.taxCollectorId = input.readDouble();
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of AddTaxCollectorOrderedSpellMessage.taxCollectorId.");
        }
    }

}