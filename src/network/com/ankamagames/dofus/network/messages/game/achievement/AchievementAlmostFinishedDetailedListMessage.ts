import { Achievement } from "./../../../types/game/achievement/Achievement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementAlmostFinishedDetailedListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1205;

	public almostFinishedAchievements: Array<Achievement>;

    public constructor()
    {
        super();
        this.almostFinishedAchievements = Array<Achievement>();
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
        this.deserializeAs_AchievementAlmostFinishedDetailedListMessage(input);
    }

    private deserializeAs_AchievementAlmostFinishedDetailedListMessage(input: ICustomDataInput)
    {
        let _item1: Achievement;
        let _almostFinishedAchievementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _almostFinishedAchievementsLen; _i1++)
        {
            _item1 = new Achievement();
            _item1.deserialize(input);
            this.almostFinishedAchievements.push(_item1);
        }
    }

}