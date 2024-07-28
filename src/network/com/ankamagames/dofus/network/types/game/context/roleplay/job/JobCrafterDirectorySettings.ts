import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobCrafterDirectorySettings
{

	public static readonly protocolId: number = 7939;

	public jobId: number = 0;
	public minLevel: number = 0;
	public free: boolean = false;

    public constructor()
    {

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