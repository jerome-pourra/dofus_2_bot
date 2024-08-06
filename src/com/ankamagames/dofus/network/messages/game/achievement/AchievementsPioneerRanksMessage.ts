import { AchievementPioneerRank } from "./../../../types/game/achievement/AchievementPioneerRank";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementsPioneerRanksMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3443;

	public achievementsPioneerRanks: Array<AchievementPioneerRank>;

    public constructor()
    {
        super();
        this.achievementsPioneerRanks = Array<AchievementPioneerRank>();
    }

    public getMessageId()
    {
        return AchievementsPioneerRanksMessage.protocolId;
    }

    public initAchievementsPioneerRanksMessage(achievementsPioneerRanks: Array<AchievementPioneerRank> = null): AchievementsPioneerRanksMessage
    {
        this.achievementsPioneerRanks = achievementsPioneerRanks;
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
        this.serializeAs_AchievementsPioneerRanksMessage(output);
    }

    public serializeAs_AchievementsPioneerRanksMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.achievementsPioneerRanks.length);
        for(var _i1: number = 0; _i1 < this.achievementsPioneerRanks.length; _i1++)
        {
            (this.achievementsPioneerRanks[_i1] as AchievementPioneerRank).serializeAs_AchievementPioneerRank(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementsPioneerRanksMessage(input);
    }

    private deserializeAs_AchievementsPioneerRanksMessage(input: ICustomDataInput)
    {
        let _item1: AchievementPioneerRank;
        let _achievementsPioneerRanksLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _achievementsPioneerRanksLen; _i1++)
        {
            _item1 = new AchievementPioneerRank();
            _item1.deserialize(input);
            this.achievementsPioneerRanks.push(_item1);
        }
    }

}