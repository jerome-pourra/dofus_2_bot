import { Achievement } from "./../../../types/game/achievement/Achievement";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2058;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public achievement: Achievement;

    public constructor()
    {
        super();
        this.achievement = new Achievement();
    }

    public getMessageId()
    {
        return AchievementDetailsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementDetailsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementDetailsMessage.endpointServer;
    }

    public initAchievementDetailsMessage(achievement: Achievement = null): AchievementDetailsMessage
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
        this.serializeAs_AchievementDetailsMessage(output);
    }

    public serializeAs_AchievementDetailsMessage(output: ICustomDataOutput)
    {
        this.achievement.serializeAs_Achievement(output);
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