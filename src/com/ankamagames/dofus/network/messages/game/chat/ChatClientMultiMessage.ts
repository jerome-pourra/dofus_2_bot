import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractClientMessage } from "./ChatAbstractClientMessage";

export class ChatClientMultiMessage extends ChatAbstractClientMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3932;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public channel: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatClientMultiMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatClientMultiMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatClientMultiMessage.endpointServer;
    }

    public initChatClientMultiMessage(content: string = "", channel: number = 0): ChatClientMultiMessage
    {
        super.initChatAbstractClientMessage(content);
        this.channel = channel;
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
        this.serializeAs_ChatClientMultiMessage(output);
    }

    public serializeAs_ChatClientMultiMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatAbstractClientMessage(output);
        output.writeByte(this.channel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatClientMultiMessage(input);
    }

    private deserializeAs_ChatClientMultiMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._channelFunc(input);
    }

    private _channelFunc(input: ICustomDataInput)
    {
        this.channel = input.readByte();
        if(this.channel < 0)
        {
            throw new Error("Forbidden value (" + this.channel + ") on element of ChatClientMultiMessage.channel.");
        }
    }

}