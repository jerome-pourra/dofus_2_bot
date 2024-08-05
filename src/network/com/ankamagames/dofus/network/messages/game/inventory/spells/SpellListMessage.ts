import { SpellItem } from "./../../../../types/game/data/items/SpellItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SpellListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7427;

	public spellPrevisualization: boolean = false;
	public spells: Array<SpellItem>;

    public constructor()
    {
        super();
        this.spells = Array<SpellItem>();
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