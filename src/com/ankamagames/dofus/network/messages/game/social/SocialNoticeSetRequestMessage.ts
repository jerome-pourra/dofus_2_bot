import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SocialNoticeSetRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3682;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SocialNoticeSetRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SocialNoticeSetRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SocialNoticeSetRequestMessage.endpointServer;
    }

    public initSocialNoticeSetRequestMessage(): SocialNoticeSetRequestMessage
    {
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
        this.serializeAs_SocialNoticeSetRequestMessage(output);
    }

    public serializeAs_SocialNoticeSetRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialNoticeSetRequestMessage(input);
    }

    private deserializeAs_SocialNoticeSetRequestMessage(input: ICustomDataInput)
    {

    }

}