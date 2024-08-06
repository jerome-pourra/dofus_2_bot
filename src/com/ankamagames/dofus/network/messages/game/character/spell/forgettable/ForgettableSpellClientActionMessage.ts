import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ForgettableSpellClientActionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5459;

	public spellId: number = 0;
	public action: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ForgettableSpellClientActionMessage.protocolId;
    }

    public initForgettableSpellClientActionMessage(spellId: number = 0, action: number = 0): ForgettableSpellClientActionMessage
    {
        this.spellId = spellId;
        this.action = action;
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
        this.serializeAs_ForgettableSpellClientActionMessage(output);
    }

    public serializeAs_ForgettableSpellClientActionMessage(output: ICustomDataOutput)
    {
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        }
        output.writeInt(this.spellId);
        output.writeByte(this.action);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForgettableSpellClientActionMessage(input);
    }

    private deserializeAs_ForgettableSpellClientActionMessage(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._actionFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readInt();
        if(this.spellId < 0)
        {
            throw new Error("Forbidden value (" + this.spellId + ") on element of ForgettableSpellClientActionMessage.spellId.");
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of ForgettableSpellClientActionMessage.action.");
        }
    }

}