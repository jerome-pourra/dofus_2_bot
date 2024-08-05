import { Achievement } from "./../../../types/game/achievement/Achievement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailedListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2020;

	public startedAchievements: Array<Achievement>;
	public finishedAchievements: Array<Achievement>;

    public constructor()
    {
        super();
        this.startedAchievements = Array<Achievement>();
        this.finishedAchievements = Array<Achievement>();
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
        this.deserializeAs_AchievementDetailedListMessage(input);
    }

    private deserializeAs_AchievementDetailedListMessage(input: ICustomDataInput)
    {
        let _item1: Achievement;
        let _item2: Achievement;
        let _startedAchievementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _startedAchievementsLen; _i1++)
        {
            _item1 = new Achievement();
            _item1.deserialize(input);
            this.startedAchievements.push(_item1);
        }
        let _finishedAchievementsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _finishedAchievementsLen; _i2++)
        {
            _item2 = new Achievement();
            _item2.deserialize(input);
            this.finishedAchievements.push(_item2);
        }
    }

}