import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractClientMessage } from "./ChatAbstractClientMessage";

export class ChatClientPrivateMessage extends ChatAbstractClientMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7053;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public receiver: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.receiver = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return ChatClientPrivateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatClientPrivateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatClientPrivateMessage.endpointServer;
    }

    public initChatClientPrivateMessage(content: string = "", receiver: AbstractPlayerSearchInformation = null): ChatClientPrivateMessage
    {
        super.initChatAbstractClientMessage(content);
        this.receiver = receiver;
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
        this.serializeAs_ChatClientPrivateMessage(output);
    }

    public serializeAs_ChatClientPrivateMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ChatAbstractClientMessage(output);
        output.writeShort(this.receiver.getTypeId());
        this.receiver.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatClientPrivateMessage(input);
    }

    private deserializeAs_ChatClientPrivateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.receiver = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.receiver.deserialize(input);
    }

}