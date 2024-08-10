import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobExperience implements INetworkType
{

	public static readonly protocolId: number = 1492;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public jobId: number = 0;
	public jobLevel: number = 0;
	public jobXP: number = 0;
	public jobXpLevelFloor: number = 0;
	public jobXpNextLevelFloor: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return JobExperience.protocolId;
    }

    public isEndpointClient()
    {
        return JobExperience.endpointClient;
    }

    public isEndpointServer()
    {
        return JobExperience.endpointServer;
    }

    public initJobExperience(jobId: number = 0, jobLevel: number = 0, jobXP: number = 0, jobXpLevelFloor: number = 0, jobXpNextLevelFloor: number = 0): JobExperience
    {
        this.jobId = jobId;
        this.jobLevel = jobLevel;
        this.jobXP = jobXP;
        this.jobXpLevelFloor = jobXpLevelFloor;
        this.jobXpNextLevelFloor = jobXpNextLevelFloor;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_JobExperience(output);
    }

    public serializeAs_JobExperience(output: ICustomDataOutput)
    {
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
        }
        output.writeByte(this.jobId);
        if(this.jobLevel < 0 || this.jobLevel > 255)
        {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element jobLevel.");
        }
        output.writeByte(this.jobLevel);
        if(this.jobXP < 0 || this.jobXP > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.jobXP + ") on element jobXP.");
        }
        output.writeVarLong(this.jobXP);
        if(this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.jobXpLevelFloor + ") on element jobXpLevelFloor.");
        }
        output.writeVarLong(this.jobXpLevelFloor);
        if(this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.jobXpNextLevelFloor + ") on element jobXpNextLevelFloor.");
        }
        output.writeVarLong(this.jobXpNextLevelFloor);
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