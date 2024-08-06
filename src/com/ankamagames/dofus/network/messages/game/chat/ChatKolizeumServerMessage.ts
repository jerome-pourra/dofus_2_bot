import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatServerMessage } from "./ChatServerMessage";

export class ChatKolizeumServerMessage extends ChatServerMessage implements INetworkMessage
{

	public static readonly protocolId: number = 942;

	public originServerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatKolizeumServerMessage.protocolId;
    }

    public initChatKolizeumServerMessage(channel: number = 0, content: string = "", timestamp: number = 0, fingerprint: string = "", senderId: number = 0, senderName: string = "", prefix: string = "", senderAccountId: number = 0, originServerId: number = 0): ChatKolizeumServerMessage
    {
        super.initChatServerMessage(channel,content,timestamp,fingerprint,senderId,senderName,prefix,senderAccountId);
        this.originServerId = originServerId;
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
        this.serializeAs_ChatKolizeumServerMessage(output);
    }

    public serializeAs_ChatKolizeumServerMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatServerMessage(output);
        output.writeShort(this.originServerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatKolizeumServerMessage(input);
    }

    private deserializeAs_ChatKolizeumServerMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._originServerIdFunc(input);
    }

    private _originServerIdFunc(input: ICustomDataInput)
    {
        this.originServerId = input.readShort();
    }

}