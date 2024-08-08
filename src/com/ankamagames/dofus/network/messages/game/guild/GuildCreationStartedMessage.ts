import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildCreationStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5711;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildCreationStartedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildCreationStartedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildCreationStartedMessage.endpointServer;
    }

    public initGuildCreationStartedMessage(): GuildCreationStartedMessage
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
        this.serializeAs_GuildCreationStartedMessage(output);
    }

    public serializeAs_GuildCreationStartedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildCreationStartedMessage(input);
    }

    private deserializeAs_GuildCreationStartedMessage(input: ICustomDataInput)
    {

    }

}