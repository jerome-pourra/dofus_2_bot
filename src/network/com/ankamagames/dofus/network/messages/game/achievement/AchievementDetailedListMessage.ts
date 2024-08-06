import { Achievement } from "./../../../types/game/achievement/Achievement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailedListMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return AchievementDetailedListMessage.protocolId;
    }

    public initAchievementDetailedListMessage(startedAchievements: Array<Achievement> = null, finishedAchievements: Array<Achievement> = null): AchievementDetailedListMessage
    {
        this.startedAchievements = startedAchievements;
        this.finishedAchievements = finishedAchievements;
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
        this.serializeAs_AchievementDetailedListMessage(output);
    }

    public serializeAs_AchievementDetailedListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.startedAchievements.length);
        for(var _i1: number = 0; _i1 < this.startedAchievements.length; _i1++)
        {
            (this.startedAchievements[_i1] as Achievement).serializeAs_Achievement(output);
        }
        output.writeShort(this.finishedAchievements.length);
        for(var _i2: number = 0; _i2 < this.finishedAchievements.length; _i2++)
        {
            (this.finishedAchievements[_i2] as Achievement).serializeAs_Achievement(output);
        }
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