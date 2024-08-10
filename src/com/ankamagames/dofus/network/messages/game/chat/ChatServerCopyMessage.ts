import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractServerMessage } from "./ChatAbstractServerMessage";

export class ChatServerCopyMessage extends ChatAbstractServerMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8617;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public receiverId: number = 0;
	public receiverName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatServerCopyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatServerCopyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatServerCopyMessage.endpointServer;
    }

    public initChatServerCopyMessage(channel: number = 0, content: string = "", timestamp: number = 0, fingerprint: string = "", receiverId: number = 0, receiverName: string = ""): ChatServerCopyMessage
    {
        super.initChatAbstractServerMessage(channel,content,timestamp,fingerprint);
        this.receiverId = receiverId;
        this.receiverName = receiverName;
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
        this.serializeAs_ChatServerCopyMessage(output);
    }

    public serializeAs_ChatServerCopyMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatAbstractServerMessage(output);
        if(this.receiverId < 0 || this.receiverId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.receiverId + ") on element receiverId.");
        }
        output.writeVarLong(this.receiverId);
        output.writeUTF(this.receiverName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatServerCopyMessage(input);
    }

    private deserializeAs_ChatServerCopyMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._receiverIdFunc(input);
        this._receiverNameFunc(input);
    }

    private _receiverIdFunc(input: ICustomDataInput)
    {
        this.receiverId = input.readVarUhLong();
        if(this.receiverId < 0 || this.receiverId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.receiverId + ") on element of ChatServerCopyMessage.receiverId.");
        }
    }

    private _receiverNameFunc(input: ICustomDataInput)
    {
        this.receiverName = input.readUTF();
    }

}