import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChatSmileyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7020;

	public entityId: number = 0;
	public smileyId: number = 0;
	public accountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatSmileyMessage.protocolId;
    }

    public initChatSmileyMessage(entityId: number = 0, smileyId: number = 0, accountId: number = 0): ChatSmileyMessage
    {
        this.entityId = entityId;
        this.smileyId = smileyId;
        this.accountId = accountId;
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
        this.serializeAs_ChatSmileyMessage(output);
    }

    public serializeAs_ChatSmileyMessage(output: ICustomDataOutput)
    {
        if(this.entityId < -9007199254740992 || this.entityId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.entityId + ") on element entityId.");
        }
        output.writeDouble(this.entityId);
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
        }
        output.writeVarShort(this.smileyId);
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatSmileyMessage(input);
    }

    private deserializeAs_ChatSmileyMessage(input: ICustomDataInput)
    {
        this._entityIdFunc(input);
        this._smileyIdFunc(input);
        this._accountIdFunc(input);
    }

    private _entityIdFunc(input: ICustomDataInput)
    {
        this.entityId = input.readDouble();
        if(this.entityId < -9007199254740992 || this.entityId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.entityId + ") on element of ChatSmileyMessage.entityId.");
        }
    }

    private _smileyIdFunc(input: ICustomDataInput)
    {
        this.smileyId = input.readVarUhShort();
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element of ChatSmileyMessage.smileyId.");
        }
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of ChatSmileyMessage.accountId.");
        }
    }

}