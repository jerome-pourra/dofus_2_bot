import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SocialFightLeaveRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 995;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public socialFightInfo: SocialFightInfo;

    public constructor()
    {
        super();
        this.socialFightInfo = new SocialFightInfo();
    }

    public getMessageId()
    {
        return SocialFightLeaveRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SocialFightLeaveRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SocialFightLeaveRequestMessage.endpointServer;
    }

    public initSocialFightLeaveRequestMessage(socialFightInfo: SocialFightInfo = null): SocialFightLeaveRequestMessage
    {
        this.socialFightInfo = socialFightInfo;
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
        this.serializeAs_SocialFightLeaveRequestMessage(output);
    }

    public serializeAs_SocialFightLeaveRequestMessage(output: ICustomDataOutput)
    {
        this.socialFightInfo.serializeAs_SocialFightInfo(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialFightLeaveRequestMessage(input);
    }

    private deserializeAs_SocialFightLeaveRequestMessage(input: ICustomDataInput)
    {
        this.socialFightInfo = new SocialFightInfo();
        this.socialFightInfo.deserialize(input);
    }

}