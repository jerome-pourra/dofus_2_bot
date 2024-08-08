import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateAllGuildRankRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1965;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public ranks: Array<RankInformation>;

    public constructor()
    {
        super();
        this.ranks = Array<RankInformation>();
    }

    public getMessageId()
    {
        return UpdateAllGuildRankRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return UpdateAllGuildRankRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return UpdateAllGuildRankRequestMessage.endpointServer;
    }

    public initUpdateAllGuildRankRequestMessage(ranks: Array<RankInformation> = null): UpdateAllGuildRankRequestMessage
    {
        this.ranks = ranks;
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
        this.serializeAs_UpdateAllGuildRankRequestMessage(output);
    }

    public serializeAs_UpdateAllGuildRankRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ranks.length);
        for(var _i1: number = 0; _i1 < this.ranks.length; _i1++)
        {
            (this.ranks[_i1] as RankInformation).serializeAs_RankInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateAllGuildRankRequestMessage(input);
    }

    private deserializeAs_UpdateAllGuildRankRequestMessage(input: ICustomDataInput)
    {
        let _item1: RankInformation;
        let _ranksLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _ranksLen; _i1++)
        {
            _item1 = new RankInformation();
            _item1.deserialize(input);
            this.ranks.push(_item1);
        }
    }

}