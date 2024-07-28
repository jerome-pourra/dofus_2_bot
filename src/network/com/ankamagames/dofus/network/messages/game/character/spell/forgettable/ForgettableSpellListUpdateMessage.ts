import { ForgettableSpellItem } from "./../../../../../types/game/data/items/ForgettableSpellItem";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ForgettableSpellListUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6155;

	public action: number = 0;
	public spells: Array<ForgettableSpellItem>;

    public constructor()
    {
        super();
        this.spells = Array<ForgettableSpellItem>();
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
        this.deserializeAs_ForgettableSpellListUpdateMessage(input);
    }

    private deserializeAs_ForgettableSpellListUpdateMessage(input: ICustomDataInput)
    {
        let _item2: ForgettableSpellItem;
        this._actionFunc(input);
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _spellsLen; _i2++)
        {
            _item2 = new ForgettableSpellItem();
            _item2.deserialize(input);
            this.spells.push(_item2);
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of ForgettableSpellListUpdateMessage.action.");
        }
    }

}