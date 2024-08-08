import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChatCommunityChannelSetCommunityRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2893;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public communityId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatCommunityChannelSetCommunityRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatCommunityChannelSetCommunityRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatCommunityChannelSetCommunityRequestMessage.endpointServer;
    }

    public initChatCommunityChannelSetCommunityRequestMessage(communityId: number = 0): ChatCommunityChannelSetCommunityRequestMessage
    {
        this.communityId = communityId;
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
        this.serializeAs_ChatCommunityChannelSetCommunityRequestMessage(output);
    }

    public serializeAs_ChatCommunityChannelSetCommunityRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.communityId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatCommunityChannelSetCommunityRequestMessage(input);
    }

    private deserializeAs_ChatCommunityChannelSetCommunityRequestMessage(input: ICustomDataInput)
    {
        this._communityIdFunc(input);
    }

    private _communityIdFunc(input: ICustomDataInput)
    {
        this.communityId = input.readShort();
    }

}