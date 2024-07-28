import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AchievementObjective } from "./AchievementObjective";

export class AchievementStartedObjective extends AchievementObjective
{

	public static readonly protocolId: number = 5360;

	public value: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementStartedObjective(input);
    }

    private deserializeAs_AchievementStartedObjective(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._valueFunc(input);
    }

    private _valueFunc(input: ICustomDataInput)
    {
        this.value = input.readVarUhLong();
        if(this.value < 0 || this.value > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.value + ") on element of AchievementStartedObjective.value.");
        }
    }

}