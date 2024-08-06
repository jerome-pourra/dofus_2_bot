import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobCrafterDirectorySettings implements INetworkType
{

	public static readonly protocolId: number = 7939;

	public jobId: number = 0;
	public minLevel: number = 0;
	public free: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return JobCrafterDirectorySettings.protocolId;
    }

    public initJobCrafterDirectorySettings(jobId: number = 0, minLevel: number = 0, free: boolean = false): JobCrafterDirectorySettings
    {
        this.jobId = jobId;
        this.minLevel = minLevel;
        this.free = free;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_JobCrafterDirectorySettings(output);
    }

    public serializeAs_JobCrafterDirectorySettings(output: ICustomDataOutput)
    {
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
        }
        output.writeByte(this.jobId);
        if(this.minLevel < 0 || this.minLevel > 255)
        {
            throw new Error("Forbidden value (" + this.minLevel + ") on element minLevel.");
        }
        output.writeByte(this.minLevel);
        output.writeBoolean(this.free);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectorySettings(input);
    }

    private deserializeAs_JobCrafterDirectorySettings(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
        this._minLevelFunc(input);
        this._freeFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectorySettings.jobId.");
        }
    }

    private _minLevelFunc(input: ICustomDataInput)
    {
        this.minLevel = input.readUnsignedByte();
        if(this.minLevel < 0 || this.minLevel > 255)
        {
            throw new Error("Forbidden value (" + this.minLevel + ") on element of JobCrafterDirectorySettings.minLevel.");
        }
    }

    private _freeFunc(input: ICustomDataInput)
    {
        this.free = input.readBoolean();
    }

}