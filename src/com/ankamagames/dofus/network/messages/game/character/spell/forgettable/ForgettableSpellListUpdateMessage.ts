import { ForgettableSpellItem } from "./../../../../../types/game/data/items/ForgettableSpellItem";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ForgettableSpellListUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6155;

	public action: number = 0;
	public spells: Array<ForgettableSpellItem>;

    public constructor()
    {
        super();
        this.spells = Array<ForgettableSpellItem>();
    }

    public getMessageId()
    {
        return ForgettableSpellListUpdateMessage.protocolId;
    }

    public initForgettableSpellListUpdateMessage(action: number = 0, spells: Array<ForgettableSpellItem> = null): ForgettableSpellListUpdateMessage
    {
        this.action = action;
        this.spells = spells;
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
        this.serializeAs_ForgettableSpellListUpdateMessage(output);
    }

    public serializeAs_ForgettableSpellListUpdateMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.action);
        output.writeShort(this.spells.length);
        for(var _i2: number = 0; _i2 < this.spells.length; _i2++)
        {
            (this.spells[_i2] as ForgettableSpellItem).serializeAs_ForgettableSpellItem(output);
        }
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