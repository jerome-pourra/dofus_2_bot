import { AchievementAchievedRewardable } from "./../../../types/game/achievement/AchievementAchievedRewardable";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AchievementFinishedMessage } from "./AchievementFinishedMessage";

export class AchievementFinishedInformationMessage extends AchievementFinishedMessage
{

	public static readonly protocolId: number = 1898;

	public name: string = "";
	public playerId: number = 0;

    public constructor()
    {
        super();
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