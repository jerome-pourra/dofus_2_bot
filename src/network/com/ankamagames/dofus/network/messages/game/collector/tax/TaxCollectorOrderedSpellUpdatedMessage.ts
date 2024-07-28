import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorOrderedSpellUpdatedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2428;

	public taxCollectorId: number = 0;
	public taxCollectorSpells: Array<TaxCollectorOrderedSpell>;

    public constructor()
    {
        super();
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
        this.deserializeAs_TaxCollectorOrderedSpellUpdatedMessage(input);
    }

    private deserializeAs_TaxCollectorOrderedSpellUpdatedMessage(input: ICustomDataInput)
    {
        let _item2: TaxCollectorOrderedSpell;
        this._taxCollectorIdFunc(input);
        let _taxCollectorSpellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _taxCollectorSpellsLen; _i2++)
        {
            _item2 = new TaxCollectorOrderedSpell();
            _item2.deserialize(input);
            this.taxCollectorSpells.push(_item2);
        }
    }

    private _taxCollectorIdFunc(input: ICustomDataInput)
    {
        this.taxCollectorId = input.readDouble();
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element of TaxCollectorOrderedSpellUpdatedMessage.taxCollectorId.");
        }
    }

}