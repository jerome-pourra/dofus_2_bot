import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildFactsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6650;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guildId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildFactsRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildFactsRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildFactsRequestMessage.endpointServer;
    }

    public initGuildFactsRequestMessage(guildId: number = 0): GuildFactsRequestMessage
    {
        this.guildId = guildId;
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
        this.serializeAs_GuildFactsRequestMessage(output);
    }

    public serializeAs_GuildFactsRequestMessage(output: ICustomDataOutput)
    {
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
        }
        output.writeVarInt(this.guildId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildFactsRequestMessage(input);
    }

    private deserializeAs_GuildFactsRequestMessage(input: ICustomDataInput)
    {
        this._guildIdFunc(input);
    }

    private _guildIdFunc(input: ICustomDataInput)
    {
        this.guildId = input.readVarUhInt();
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element of GuildFactsRequestMessage.guildId.");
        }
    }

}