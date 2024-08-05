import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AchievementObjective } from "./AchievementObjective";
import { AchievementStartedObjective } from "./AchievementStartedObjective";

export class Achievement
{

	public static readonly protocolId: number = 2764;

	public id: number = 0;
	public finishedObjective: Array<AchievementObjective>;
	public startedObjectives: Array<AchievementStartedObjective>;

    public constructor()
    {
        this.finishedObjective = Array<AchievementObjective>();
        this.startedObjectives = Array<AchievementStartedObjective>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Achievement(input);
    }

    private deserializeAs_Achievement(input: ICustomDataInput)
    {
        let _item2: AchievementObjective;
        let _item3: AchievementStartedObjective;
        this._idFunc(input);
        let _finishedObjectiveLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _finishedObjectiveLen; _i2++)
        {
            _item2 = new AchievementObjective();
            _item2.deserialize(input);
            this.finishedObjective.push(_item2);
        }
        let _startedObjectivesLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _startedObjectivesLen; _i3++)
        {
            _item3 = new AchievementStartedObjective();
            _item3.deserialize(input);
            this.startedObjectives.push(_item3);
        }
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of Achievement.id.");
        }
    }

}