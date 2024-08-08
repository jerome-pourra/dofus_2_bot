import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GuildPlayerApplicationAbstractMessage } from "./GuildPlayerApplicationAbstractMessage";

export class GuildPlayerNoApplicationInformationMessage extends GuildPlayerApplicationAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6961;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildPlayerNoApplicationInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPlayerNoApplicationInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPlayerNoApplicationInformationMessage.endpointServer;
    }

    public initGuildPlayerNoApplicationInformationMessage(): GuildPlayerNoApplicationInformationMessage
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
        this.serializeAs_GuildPlayerNoApplicationInformationMessage(output);
    }

    public serializeAs_GuildPlayerNoApplicationInformationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPlayerNoApplicationInformationMessage(input);
    }

    private deserializeAs_GuildPlayerNoApplicationInformationMessage(input: ICustomDataInput)
    {

    }

}