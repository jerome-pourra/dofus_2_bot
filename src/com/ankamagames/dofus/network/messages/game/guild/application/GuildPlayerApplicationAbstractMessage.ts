import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildPlayerApplicationAbstractMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4745;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildPlayerApplicationAbstractMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildPlayerApplicationAbstractMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildPlayerApplicationAbstractMessage.endpointServer;
    }

    public initGuildPlayerApplicationAbstractMessage(): GuildPlayerApplicationAbstractMessage
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
        this.serializeAs_GuildPlayerApplicationAbstractMessage(output);
    }

    public serializeAs_GuildPlayerApplicationAbstractMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPlayerApplicationAbstractMessage(input);
    }

    private deserializeAs_GuildPlayerApplicationAbstractMessage(input: ICustomDataInput)
    {

    }

}