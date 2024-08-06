import { RankInformation } from "./../../../types/game/rank/RankInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRankUpdateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 64;

	public rank: RankInformation;

    public constructor()
    {
        super();
        this.rank = new RankInformation();
    }

    public getMessageId()
    {
        return AllianceRankUpdateRequestMessage.protocolId;
    }

    public initAllianceRankUpdateRequestMessage(rank: RankInformation = null): AllianceRankUpdateRequestMessage
    {
        this.rank = rank;
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
        this.serializeAs_AllianceRankUpdateRequestMessage(output);
    }

    public serializeAs_AllianceRankUpdateRequestMessage(output: ICustomDataOutput)
    {
        this.rank.serializeAs_RankInformation(output);
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