import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildIsThereAnyApplicationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5069;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildIsThereAnyApplicationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildIsThereAnyApplicationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildIsThereAnyApplicationMessage.endpointServer;
    }

    public initGuildIsThereAnyApplicationMessage(): GuildIsThereAnyApplicationMessage
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
        this.serializeAs_GuildIsThereAnyApplicationMessage(output);
    }

    public serializeAs_GuildIsThereAnyApplicationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildIsThereAnyApplicationMessage(input);
    }

    private deserializeAs_GuildIsThereAnyApplicationMessage(input: ICustomDataInput)
    {

    }

}