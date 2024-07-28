import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AchievementRewardSuccessMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1060;

	public achievementId: number = 0;

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