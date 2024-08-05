import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRankUpdateRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 64;

	public rank: RankInformation;

    public constructor()
    {
        super();
        this.rank = new RankInformation();
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
        this.deserializeAs_AllianceRankUpdateRequestMessage(input);
    }

    private deserializeAs_AllianceRankUpdateRequestMessage(input: ICustomDataInput)
    {
        this.rank = new RankInformation();
        this.rank.deserialize(input);
    }

}