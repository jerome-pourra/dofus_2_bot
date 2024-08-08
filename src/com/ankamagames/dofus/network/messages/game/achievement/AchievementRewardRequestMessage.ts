import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementRewardRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1789;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public achievementId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementRewardRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementRewardRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementRewardRequestMessage.endpointServer;
    }

    public initAchievementRewardRequestMessage(achievementId: number = 0): AchievementRewardRequestMessage
    {
        this.achievementId = achievementId;
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
        this.serializeAs_AchievementRewardRequestMessage(output);
    }

    public serializeAs_AchievementRewardRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.achievementId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementRewardRequestMessage(input);
    }

    private deserializeAs_AchievementRewardRequestMessage(input: ICustomDataInput)
    {
        this._achievementIdFunc(input);
    }

    private _achievementIdFunc(input: ICustomDataInput)
    {
        this.achievementId = input.readShort();
    }

}