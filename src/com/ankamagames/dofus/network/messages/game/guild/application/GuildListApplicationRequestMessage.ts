import { PaginationRequestAbstractMessage } from "./../../PaginationRequestAbstractMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GuildListApplicationRequestMessage extends PaginationRequestAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 695;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildListApplicationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildListApplicationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildListApplicationRequestMessage.endpointServer;
    }

    public initGuildListApplicationRequestMessage(offset: number = 0, count: number = 0): GuildListApplicationRequestMessage
    {
        super.initPaginationRequestAbstractMessage(offset,count);
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
        this.serializeAs_GuildListApplicationRequestMessage(output);
    }

    public serializeAs_GuildListApplicationRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationRequestAbstractMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildListApplicationRequestMessage(input);
    }

    private deserializeAs_GuildListApplicationRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}