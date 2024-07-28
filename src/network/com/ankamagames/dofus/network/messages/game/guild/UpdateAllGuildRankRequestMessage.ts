import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateAllGuildRankRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1965;

	public ranks: Array<RankInformation>;

    public constructor()
    {
        super();
        this.ranks = Array<RankInformation>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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