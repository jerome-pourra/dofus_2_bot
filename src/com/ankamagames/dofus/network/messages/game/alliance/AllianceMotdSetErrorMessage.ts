import { SocialNoticeSetErrorMessage } from "./../social/SocialNoticeSetErrorMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class AllianceMotdSetErrorMessage extends SocialNoticeSetErrorMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6006;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMotdSetErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceMotdSetErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceMotdSetErrorMessage.endpointServer;
    }

    public initAllianceMotdSetErrorMessage(reason: number = 0): AllianceMotdSetErrorMessage
    {
        super.initSocialNoticeSetErrorMessage(reason);
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
        this.serializeAs_AllianceMotdSetErrorMessage(output);
    }

    public serializeAs_AllianceMotdSetErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeSetErrorMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMotdSetErrorMessage(input);
    }

    private deserializeAs_AllianceMotdSetErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}