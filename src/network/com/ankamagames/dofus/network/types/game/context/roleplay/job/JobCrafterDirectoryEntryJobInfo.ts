import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobCrafterDirectoryEntryJobInfo
{

	public static readonly protocolId: number = 5157;

	public jobId: number = 0;
	public jobLevel: number = 0;
	public free: boolean = false;
	public minLevel: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryEntryJobInfo(input);
    }

    private deserializeAs_JobCrafterDirectoryEntryJobInfo(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
        this._jobLevelFunc(input);
        this._freeFunc(input);
        this._minLevelFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryEntryJobInfo.jobId.");
        }
    }

    private _jobLevelFunc(input: ICustomDataInput)
    {
        this.jobLevel = input.readUnsignedByte();
        if(this.jobLevel < 1 || this.jobLevel > 200)
        {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element of JobCrafterDirectoryEntryJobInfo.jobLevel.");
        }
    }

    private _freeFunc(input: ICustomDataInput)
    {
        this.free = input.readBoolean();
    }

    private _minLevelFunc(input: ICustomDataInput)
    {
        this.minLevel = input.readUnsignedByte();
        if(this.minLevel < 0 || this.minLevel > 255)
        {
            throw new Error("Forbidden value (" + this.minLevel + ") on element of JobCrafterDirectoryEntryJobInfo.minLevel.");
        }
    }

}