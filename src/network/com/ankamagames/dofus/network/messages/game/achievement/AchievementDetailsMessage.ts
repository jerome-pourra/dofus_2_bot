import { Achievement } from "./../../../types/game/achievement/Achievement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2058;

	public achievement: Achievement;

    public constructor()
    {
        super();
        this.achievement = new Achievement();
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
        this.deserializeAs_AchievementDetailsMessage(input);
    }

    private deserializeAs_AchievementDetailsMessage(input: ICustomDataInput)
    {
        this.achievement = new Achievement();
        this.achievement.deserialize(input);
    }

}