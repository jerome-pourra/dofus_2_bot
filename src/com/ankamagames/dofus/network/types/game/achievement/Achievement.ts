import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AchievementObjective } from "./AchievementObjective";
import { AchievementStartedObjective } from "./AchievementStartedObjective";

export class Achievement implements INetworkType
{

	public static readonly protocolId: number = 2764;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public finishedObjective: Array<AchievementObjective>;
	public startedObjectives: Array<AchievementStartedObjective>;

    public constructor()
    {
        this.finishedObjective = Array<AchievementObjective>();
        this.startedObjectives = Array<AchievementStartedObjective>();
    }

    public getTypeId()
    {
        return Achievement.protocolId;
    }

    public isEndpointClient()
    {
        return Achievement.endpointClient;
    }

    public isEndpointServer()
    {
        return Achievement.endpointServer;
    }

    public initAchievement(id: number = 0, finishedObjective: Array<AchievementObjective> = null, startedObjectives: Array<AchievementStartedObjective> = null): Achievement
    {
        this.id = id;
        this.finishedObjective = finishedObjective;
        this.startedObjectives = startedObjectives;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Achievement(output);
    }

    public serializeAs_Achievement(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarShort(this.id);
        output.writeShort(this.finishedObjective.length);
        for(var _i2: number = 0; _i2 < this.finishedObjective.length; _i2++)
        {
            (this.finishedObjective[_i2] as AchievementObjective).serializeAs_AchievementObjective(output);
        }
        output.writeShort(this.startedObjectives.length);
        for(var _i3: number = 0; _i3 < this.startedObjectives.length; _i3++)
        {
            (this.startedObjectives[_i3] as AchievementStartedObjective).serializeAs_AchievementStartedObjective(output);
        }
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