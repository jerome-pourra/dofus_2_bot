import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementRewardSuccessMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1060;

	public achievementId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementRewardSuccessMessage.protocolId;
    }

    public initAchievementRewardSuccessMessage(achievementId: number = 0): AchievementRewardSuccessMessage
    {
        this.achievementId = achievementId;
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
        this.serializeAs_AchievementRewardSuccessMessage(output);
    }

    public serializeAs_AchievementRewardSuccessMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.achievementId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementRewardSuccessMessage(input);
    }

    private deserializeAs_AchievementRewardSuccessMessage(input: ICustomDataInput)
    {
        this._achievementIdFunc(input);
    }

    private _achievementIdFunc(input: ICustomDataInput)
    {
        this.achievementId = input.readShort();
    }

}