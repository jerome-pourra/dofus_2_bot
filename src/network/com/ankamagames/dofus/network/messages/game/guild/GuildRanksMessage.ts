import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildRanksMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3908;

	public ranks: Array<RankInformation>;

    public constructor()
    {
        super();
        this.ranks = Array<RankInformation>();
    }

    public getMessageId()
    {
        return GuildRanksMessage.protocolId;
    }

    public initGuildRanksMessage(ranks: Array<RankInformation> = null): GuildRanksMessage
    {
        this.ranks = ranks;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildRanksMessage(output);
    }

    public serializeAs_GuildRanksMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ranks.length);
        for(var _i1: number = 0; _i1 < this.ranks.length; _i1++)
        {
            (this.ranks[_i1] as RankInformation).serializeAs_RankInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRanksMessage(input);
    }

    private deserializeAs_GuildRanksMessage(input: ICustomDataInput)
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