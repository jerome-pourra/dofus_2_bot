import { AchievementAchievedRewardable } from "./../../../types/game/achievement/AchievementAchievedRewardable";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementFinishedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1474;

	public achievement: AchievementAchievedRewardable;

    public constructor()
    {
        super();
        this.achievement = new AchievementAchievedRewardable();
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
        this.deserializeAs_AchievementFinishedMessage(input);
    }

    private deserializeAs_AchievementFinishedMessage(input: ICustomDataInput)
    {
        this.achievement = new AchievementAchievedRewardable();
        this.achievement.deserialize(input);
    }

}