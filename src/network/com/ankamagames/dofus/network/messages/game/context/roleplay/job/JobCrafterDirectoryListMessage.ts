import { JobCrafterDirectoryListEntry } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryListEntry";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8710;

	public listEntries: Array<JobCrafterDirectoryListEntry>;

    public constructor()
    {
        super();
        this.listEntries = Array<JobCrafterDirectoryListEntry>();
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
        this.deserializeAs_JobCrafterDirectoryListMessage(input);
    }

    private deserializeAs_JobCrafterDirectoryListMessage(input: ICustomDataInput)
    {
        let _item1: JobCrafterDirectoryListEntry;
        let _listEntriesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _listEntriesLen; _i1++)
        {
            _item1 = new JobCrafterDirectoryListEntry();
            _item1.deserialize(input);
            this.listEntries.push(_item1);
        }
    }

}