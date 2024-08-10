import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildRecruitmentInvalidateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5184;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildRecruitmentInvalidateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildRecruitmentInvalidateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildRecruitmentInvalidateMessage.endpointServer;
    }

    public initGuildRecruitmentInvalidateMessage(): GuildRecruitmentInvalidateMessage
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
        this.serializeAs_GuildRecruitmentInvalidateMessage(output);
    }

    public serializeAs_GuildRecruitmentInvalidateMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRecruitmentInvalidateMessage(input);
    }

    private deserializeAs_GuildRecruitmentInvalidateMessage(input: ICustomDataInput)
    {

    }

}