import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementRewardErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3079;

	public achievementId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementRewardErrorMessage.protocolId;
    }

    public initAchievementRewardErrorMessage(achievementId: number = 0): AchievementRewardErrorMessage
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
        this.serializeAs_AchievementRewardErrorMessage(output);
    }

    public serializeAs_AchievementRewardErrorMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.achievementId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementRewardErrorMessage(input);
    }

    private deserializeAs_AchievementRewardErrorMessage(input: ICustomDataInput)
    {
        this._achievementIdFunc(input);
    }

    private _achievementIdFunc(input: ICustomDataInput)
    {
        this.achievementId = input.readShort();
    }

}