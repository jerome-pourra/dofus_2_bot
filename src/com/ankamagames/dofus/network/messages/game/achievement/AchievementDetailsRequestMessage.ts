import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementDetailsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7495;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public achievementId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementDetailsRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementDetailsRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementDetailsRequestMessage.endpointServer;
    }

    public initAchievementDetailsRequestMessage(achievementId: number = 0): AchievementDetailsRequestMessage
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
        this.serializeAs_AchievementDetailsRequestMessage(output);
    }

    public serializeAs_AchievementDetailsRequestMessage(output: ICustomDataOutput)
    {
        if(this.achievementId < 0)
        {
            throw new Error("Forbidden value (" + this.achievementId + ") on element achievementId.");
        }
        output.writeVarShort(this.achievementId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementDetailsRequestMessage(input);
    }

    private deserializeAs_AchievementDetailsRequestMessage(input: ICustomDataInput)
    {
        this._achievementIdFunc(input);
    }

    private _achievementIdFunc(input: ICustomDataInput)
    {
        this.achievementId = input.readVarUhShort();
        if(this.achievementId < 0)
        {
            throw new Error("Forbidden value (" + this.achievementId + ") on element of AchievementDetailsRequestMessage.achievementId.");
        }
    }

}