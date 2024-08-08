import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChatCommunityChannelCommunityMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5839;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public communityId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatCommunityChannelCommunityMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChatCommunityChannelCommunityMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChatCommunityChannelCommunityMessage.endpointServer;
    }

    public initChatCommunityChannelCommunityMessage(communityId: number = 0): ChatCommunityChannelCommunityMessage
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
        this.serializeAs_ChatCommunityChannelCommunityMessage(output);
    }

    public serializeAs_ChatCommunityChannelCommunityMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.communityId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatCommunityChannelCommunityMessage(input);
    }

    private deserializeAs_ChatCommunityChannelCommunityMessage(input: ICustomDataInput)
    {
        this._communityIdFunc(input);
    }

    private _communityIdFunc(input: ICustomDataInput)
    {
        this.communityId = input.readShort();
    }

}