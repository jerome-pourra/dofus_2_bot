import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatServerMessage } from "./ChatServerMessage";

export class ChatAdminServerMessage extends ChatServerMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2080;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatAdminServerMessage.protocolId;
    }

    public initChatAdminServerMessage(channel: number = 0, content: string = "", timestamp: number = 0, fingerprint: string = "", senderId: number = 0, senderName: string = "", prefix: string = "", senderAccountId: number = 0): ChatAdminServerMessage
    {
        super.initChatServerMessage(channel,content,timestamp,fingerprint,senderId,senderName,prefix,senderAccountId);
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
        this.serializeAs_ChatAdminServerMessage(output);
    }

    public serializeAs_ChatAdminServerMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatServerMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatAdminServerMessage(input);
    }

    private deserializeAs_ChatAdminServerMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}