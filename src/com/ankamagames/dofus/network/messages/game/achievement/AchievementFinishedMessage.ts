import { AchievementAchievedRewardable } from "./../../../types/game/achievement/AchievementAchievedRewardable";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementFinishedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1474;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public achievement: AchievementAchievedRewardable;

    public constructor()
    {
        super();
        this.achievement = new AchievementAchievedRewardable();
    }

    public getMessageId()
    {
        return AchievementFinishedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementFinishedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementFinishedMessage.endpointServer;
    }

    public initAchievementFinishedMessage(achievement: AchievementAchievedRewardable = null): AchievementFinishedMessage
    {
        this.achievement = achievement;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AchievementFinishedMessage(output);
    }

    public serializeAs_AchievementFinishedMessage(output: ICustomDataOutput)
    {
        this.achievement.serializeAs_AchievementAchievedRewardable(output);
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