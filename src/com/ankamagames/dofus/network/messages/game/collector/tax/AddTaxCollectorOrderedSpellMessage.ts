import { TaxCollectorOrderedSpell } from "./../../../../types/game/collector/tax/TaxCollectorOrderedSpell";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AddTaxCollectorOrderedSpellMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8298;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public taxCollectorId: number = 0;
	public spell: TaxCollectorOrderedSpell;

    public constructor()
    {
        super();
        this.spell = new TaxCollectorOrderedSpell();
    }

    public getMessageId()
    {
        return AddTaxCollectorOrderedSpellMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AddTaxCollectorOrderedSpellMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AddTaxCollectorOrderedSpellMessage.endpointServer;
    }

    public initAddTaxCollectorOrderedSpellMessage(taxCollectorId: number = 0, spell: TaxCollectorOrderedSpell = null): AddTaxCollectorOrderedSpellMessage
    {
        this.taxCollectorId = taxCollectorId;
        this.spell = spell;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AddTaxCollectorOrderedSpellMessage(output);
    }

    public serializeAs_AddTaxCollectorOrderedSpellMessage(output: ICustomDataOutput)
    {
        if(this.taxCollectorId < 0 || this.taxCollectorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.taxCollectorId + ") on element taxCollectorId.");
        }
        output.writeDouble(this.taxCollectorId);
        this.spell.serializeAs_TaxCollectorOrderedSpell(output);
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