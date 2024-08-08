import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ChatAbstractClientMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6914;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatAbstractClientMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatAbstractClientMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatAbstractClientMessage.endpointServer;
    }

    public initChatAbstractClientMessage(content: string = ""): ChatAbstractClientMessage
    {
        this.content = content;
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
        this.serializeAs_ChatAbstractClientMessage(output);
    }

    public serializeAs_ChatAbstractClientMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatAbstractClientMessage(input);
    }

    private deserializeAs_ChatAbstractClientMessage(input: ICustomDataInput)
    {
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}