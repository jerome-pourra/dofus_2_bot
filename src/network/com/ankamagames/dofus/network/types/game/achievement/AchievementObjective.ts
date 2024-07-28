import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AchievementObjective
{

	public static readonly protocolId: number = 2341;

	public id: number = 0;
	public maxValue: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementObjective(input);
    }

    private deserializeAs_AchievementObjective(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._maxValueFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of AchievementObjective.id.");
        }
    }

    private _maxValueFunc(input: ICustomDataInput)
    {
        this.maxValue = input.readVarUhLong();
        if(this.maxValue < 0 || this.maxValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxValue + ") on element of AchievementObjective.maxValue.");
        }
    }

}