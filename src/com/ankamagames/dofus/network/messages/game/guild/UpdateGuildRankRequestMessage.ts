import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateGuildRankRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9846;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public rank: RankInformation;

    public constructor()
    {
        super();
        this.rank = new RankInformation();
    }

    public getMessageId()
    {
        return UpdateGuildRankRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return UpdateGuildRankRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return UpdateGuildRankRequestMessage.endpointServer;
    }

    public initUpdateGuildRankRequestMessage(rank: RankInformation = null): UpdateGuildRankRequestMessage
    {
        this.rank = rank;
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
        this.serializeAs_UpdateGuildRankRequestMessage(output);
    }

    public serializeAs_UpdateGuildRankRequestMessage(output: ICustomDataOutput)
    {
        this.rank.serializeAs_RankInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateGuildRankRequestMessage(input);
    }

    private deserializeAs_UpdateGuildRankRequestMessage(input: ICustomDataInput)
    {
        this.rank = new RankInformation();
        this.rank.deserialize(input);
    }

}