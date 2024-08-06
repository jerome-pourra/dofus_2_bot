import { Achievement } from "./../../../types/game/achievement/Achievement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementAlmostFinishedDetailedListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1205;

	public almostFinishedAchievements: Array<Achievement>;

    public constructor()
    {
        super();
        this.almostFinishedAchievements = Array<Achievement>();
    }

    public getMessageId()
    {
        return AchievementAlmostFinishedDetailedListMessage.protocolId;
    }

    public initAchievementAlmostFinishedDetailedListMessage(almostFinishedAchievements: Array<Achievement> = null): AchievementAlmostFinishedDetailedListMessage
    {
        this.almostFinishedAchievements = almostFinishedAchievements;
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
        this.serializeAs_AchievementAlmostFinishedDetailedListMessage(output);
    }

    public serializeAs_AchievementAlmostFinishedDetailedListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.almostFinishedAchievements.length);
        for(var _i1: number = 0; _i1 < this.almostFinishedAchievements.length; _i1++)
        {
            (this.almostFinishedAchievements[_i1] as Achievement).serializeAs_Achievement(output);
        }
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