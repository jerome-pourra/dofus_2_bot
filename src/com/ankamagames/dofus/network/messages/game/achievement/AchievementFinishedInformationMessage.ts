import { AchievementAchievedRewardable } from "./../../../types/game/achievement/AchievementAchievedRewardable";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AchievementFinishedMessage } from "./AchievementFinishedMessage";

export class AchievementFinishedInformationMessage extends AchievementFinishedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1898;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public name: string = "";
	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AchievementFinishedInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementFinishedInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementFinishedInformationMessage.endpointServer;
    }

    public initAchievementFinishedInformationMessage(achievement: AchievementAchievedRewardable = null, name: string = "", playerId: number = 0): AchievementFinishedInformationMessage
    {
        super.initAchievementFinishedMessage(achievement);
        this.name = name;
        this.playerId = playerId;
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
        this.serializeAs_AchievementFinishedInformationMessage(output);
    }

    public serializeAs_AchievementFinishedInformationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AchievementFinishedMessage(output);
        output.writeUTF(this.name);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementFinishedInformationMessage(input);
    }

    private deserializeAs_AchievementFinishedInformationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
        this._playerIdFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of AchievementFinishedInformationMessage.playerId.");
        }
    }

}