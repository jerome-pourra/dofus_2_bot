import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { JobCrafterDirectoryEntryPlayerInfo } from "./JobCrafterDirectoryEntryPlayerInfo";
import { JobCrafterDirectoryEntryJobInfo } from "./JobCrafterDirectoryEntryJobInfo";

export class JobCrafterDirectoryListEntry implements INetworkType
{

	public static readonly protocolId: number = 7693;

	public playerInfo: JobCrafterDirectoryEntryPlayerInfo;
	public jobInfo: JobCrafterDirectoryEntryJobInfo;

    public constructor()
    {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
    }

    public getTypeId()
    {
        return JobCrafterDirectoryListEntry.protocolId;
    }

    public initJobCrafterDirectoryListEntry(playerInfo: JobCrafterDirectoryEntryPlayerInfo = null, jobInfo: JobCrafterDirectoryEntryJobInfo = null): JobCrafterDirectoryListEntry
    {
        this.playerInfo = playerInfo;
        this.jobInfo = jobInfo;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_JobCrafterDirectoryListEntry(output);
    }

    public serializeAs_JobCrafterDirectoryListEntry(output: ICustomDataOutput)
    {
        this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(output);
        this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryListEntry(input);
    }

    private deserializeAs_JobCrafterDirectoryListEntry(input: ICustomDataInput)
    {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.playerInfo.deserialize(input);
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        this.jobInfo.deserialize(input);
    }

}