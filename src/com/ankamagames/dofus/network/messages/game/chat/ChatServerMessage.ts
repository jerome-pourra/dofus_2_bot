import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractServerMessage } from "./ChatAbstractServerMessage";

export class ChatServerMessage extends ChatAbstractServerMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6772;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public senderId: number = 0;
	public senderName: string = "";
	public prefix: string = "";
	public senderAccountId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatServerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatServerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatServerMessage.endpointServer;
    }

    public initChatServerMessage(channel: number = 0, content: string = "", timestamp: number = 0, fingerprint: string = "", senderId: number = 0, senderName: string = "", prefix: string = "", senderAccountId: number = 0): ChatServerMessage
    {
        super.initChatAbstractServerMessage(channel,content,timestamp,fingerprint);
        this.senderId = senderId;
        this.senderName = senderName;
        this.prefix = prefix;
        this.senderAccountId = senderAccountId;
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
        this.serializeAs_ChatServerMessage(output);
    }

    public serializeAs_ChatServerMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatAbstractServerMessage(output);
        if(this.senderId < -9007199254740992 || this.senderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.senderId + ") on element senderId.");
        }
        output.writeDouble(this.senderId);
        output.writeUTF(this.senderName);
        output.writeUTF(this.prefix);
        if(this.senderAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.senderAccountId + ") on element senderAccountId.");
        }
        output.writeInt(this.senderAccountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatServerMessage(input);
    }

    private deserializeAs_ChatServerMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._senderIdFunc(input);
        this._senderNameFunc(input);
        this._prefixFunc(input);
        this._senderAccountIdFunc(input);
    }

    private _senderIdFunc(input: ICustomDataInput)
    {
        this.senderId = input.readDouble();
        if(this.senderId < -9007199254740992 || this.senderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.senderId + ") on element of ChatServerMessage.senderId.");
        }
    }

    private _senderNameFunc(input: ICustomDataInput)
    {
        this.senderName = input.readUTF();
    }

    private _prefixFunc(input: ICustomDataInput)
    {
        this.prefix = input.readUTF();
    }

    private _senderAccountIdFunc(input: ICustomDataInput)
    {
        this.senderAccountId = input.readInt();
        if(this.senderAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.senderAccountId + ") on element of ChatServerMessage.senderAccountId.");
        }
    }

}