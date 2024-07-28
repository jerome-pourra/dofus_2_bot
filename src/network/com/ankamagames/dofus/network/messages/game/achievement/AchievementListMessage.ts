import { AchievementAchieved } from "./../../../types/game/achievement/AchievementAchieved";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9652;

	public finishedAchievements: Array<AchievementAchieved>;

    public constructor()
    {
        super();
        this.finishedAchievements = Array<AchievementAchieved>();
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
        this.deserializeAs_AchievementListMessage(input);
    }

    private deserializeAs_AchievementListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: AchievementAchieved;
        let _finishedAchievementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _finishedAchievementsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(AchievementAchieved,_id1);
            _item1.deserialize(input);
            this.finishedAchievements.push(_item1);
        }
    }

}