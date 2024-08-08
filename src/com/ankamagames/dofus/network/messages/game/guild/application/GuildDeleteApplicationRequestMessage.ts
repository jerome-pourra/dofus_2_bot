import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildDeleteApplicationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7132;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildDeleteApplicationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildDeleteApplicationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildDeleteApplicationRequestMessage.endpointServer;
    }

    public initGuildDeleteApplicationRequestMessage(): GuildDeleteApplicationRequestMessage
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
        this.serializeAs_GuildDeleteApplicationRequestMessage(output);
    }

    public serializeAs_GuildDeleteApplicationRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildDeleteApplicationRequestMessage(input);
    }

    private deserializeAs_GuildDeleteApplicationRequestMessage(input: ICustomDataInput)
    {

    }

}