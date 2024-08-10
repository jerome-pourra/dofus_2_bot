import { SpellItem } from "./../../../../types/game/data/items/SpellItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SpellListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7427;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public spellPrevisualization: boolean = false;
	public spells: Array<SpellItem>;

    public constructor()
    {
        super();
        this.spells = Array<SpellItem>();
    }

    public getMessageId()
    {
        return SpellListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SpellListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SpellListMessage.endpointServer;
    }

    public initSpellListMessage(spellPrevisualization: boolean = false, spells: Array<SpellItem> = null): SpellListMessage
    {
        this.spellPrevisualization = spellPrevisualization;
        this.spells = spells;
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
        this.serializeAs_SpellListMessage(output);
    }

    public serializeAs_SpellListMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.spellPrevisualization);
        output.writeShort(this.spells.length);
        for(var _i2: number = 0; _i2 < this.spells.length; _i2++)
        {
            (this.spells[_i2] as SpellItem).serializeAs_SpellItem(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpellListMessage(input);
    }

    private deserializeAs_SpellListMessage(input: ICustomDataInput)
    {
        let _item2: SpellItem;
        this._spellPrevisualizationFunc(input);
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _spellsLen; _i2++)
        {
            _item2 = new SpellItem();
            _item2.deserialize(input);
            this.spells.push(_item2);
        }
    }

    private _spellPrevisualizationFunc(input: ICustomDataInput)
    {
        this.spellPrevisualization = input.readBoolean();
    }

}