import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class TaxCollectorOrderedSpell
{

	public static readonly protocolId: number = 3173;

	public spellId: number = 0;
	public slot: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorOrderedSpell(input);
    }

    private deserializeAs_TaxCollectorOrderedSpell(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._slotFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readVarUhInt();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of TaxCollectorOrderedSpell.spellId.");
        }
    }

    private _slotFunc(input: ICustomDataInput)
    {
        this.slot = input.readByte();
        if(this.slot < 0 || this.slot > 5)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element of TaxCollectorOrderedSpell.slot.");
        }
    }

}