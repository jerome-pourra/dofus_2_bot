import { JobCrafterDirectoryListEntry } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryListEntry";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryAddMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9328;

	public listEntry: JobCrafterDirectoryListEntry;

    public constructor()
    {
        super();
        this.listEntry = new JobCrafterDirectoryListEntry();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryAddMessage(input);
    }

    private deserializeAs_JobCrafterDirectoryAddMessage(input: ICustomDataInput)
    {
        this.listEntry = new JobCrafterDirectoryListEntry();
        this.listEntry.deserialize(input);
    }

}