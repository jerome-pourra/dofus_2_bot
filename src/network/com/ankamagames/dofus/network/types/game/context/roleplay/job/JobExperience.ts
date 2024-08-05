import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobExperience
{

	public static readonly protocolId: number = 1492;

	public jobId: number = 0;
	public jobLevel: number = 0;
	public jobXP: number = 0;
	public jobXpLevelFloor: number = 0;
	public jobXpNextLevelFloor: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobExperience(input);
    }

    private deserializeAs_JobExperience(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
        this._jobLevelFunc(input);
        this._jobXPFunc(input);
        this._jobXpLevelFloorFunc(input);
        this._jobXpNextLevelFloorFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobExperience.jobId.");
        }
    }

    private _jobLevelFunc(input: ICustomDataInput)
    {
        this.jobLevel = input.readUnsignedByte();
        if(this.jobLevel < 0 || this.jobLevel > 255)
        {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element of JobExperience.jobLevel.");
        }
    }

    private _jobXPFunc(input: ICustomDataInput)
    {
        this.jobXP = input.readVarUhLong();
        if(this.jobXP < 0 || this.jobXP > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.jobXP + ") on element of JobExperience.jobXP.");
        }
    }

    private _jobXpLevelFloorFunc(input: ICustomDataInput)
    {
        this.jobXpLevelFloor = input.readVarUhLong();
        if(this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.jobXpLevelFloor + ") on element of JobExperience.jobXpLevelFloor.");
        }
    }

    private _jobXpNextLevelFloorFunc(input: ICustomDataInput)
    {
        this.jobXpNextLevelFloor = input.readVarUhLong();
        if(this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.jobXpNextLevelFloor + ") on element of JobExperience.jobXpNextLevelFloor.");
        }
    }

}