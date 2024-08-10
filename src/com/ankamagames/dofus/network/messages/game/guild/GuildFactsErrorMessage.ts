import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildFactsErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7863;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guildId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildFactsErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildFactsErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildFactsErrorMessage.endpointServer;
    }

    public initGuildFactsErrorMessage(guildId: number = 0): GuildFactsErrorMessage
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
        this.serializeAs_GuildFactsErrorMessage(output);
    }

    public serializeAs_GuildFactsErrorMessage(output: ICustomDataOutput)
    {
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
        }
        output.writeVarInt(this.guildId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildFactsErrorMessage(input);
    }

    private deserializeAs_GuildFactsErrorMessage(input: ICustomDataInput)
    {
        this._guildIdFunc(input);
    }

    private _guildIdFunc(input: ICustomDataInput)
    {
        this.guildId = input.readVarUhInt();
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element of GuildFactsErrorMessage.guildId.");
        }
    }

}