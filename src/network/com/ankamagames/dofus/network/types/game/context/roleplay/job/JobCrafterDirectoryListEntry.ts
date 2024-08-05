import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { JobCrafterDirectoryEntryPlayerInfo } from "./JobCrafterDirectoryEntryPlayerInfo";
import { JobCrafterDirectoryEntryJobInfo } from "./JobCrafterDirectoryEntryJobInfo";

export class JobCrafterDirectoryListEntry
{

	public static readonly protocolId: number = 7693;

	public playerInfo: JobCrafterDirectoryEntryPlayerInfo;
	public jobInfo: JobCrafterDirectoryEntryJobInfo;

    public constructor()
    {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
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