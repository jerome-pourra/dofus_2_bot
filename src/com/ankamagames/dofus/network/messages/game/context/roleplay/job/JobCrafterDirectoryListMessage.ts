import { JobCrafterDirectoryListEntry } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryListEntry";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8710;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public listEntries: Array<JobCrafterDirectoryListEntry>;

    public constructor()
    {
        super();
        this.listEntries = Array<JobCrafterDirectoryListEntry>();
    }

    public getMessageId()
    {
        return JobCrafterDirectoryListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobCrafterDirectoryListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobCrafterDirectoryListMessage.endpointServer;
    }

    public initJobCrafterDirectoryListMessage(listEntries: Array<JobCrafterDirectoryListEntry> = null): JobCrafterDirectoryListMessage
    {
        this.listEntries = listEntries;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_JobCrafterDirectoryListMessage(output);
    }

    public serializeAs_JobCrafterDirectoryListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.listEntries.length);
        for(var _i1: number = 0; _i1 < this.listEntries.length; _i1++)
        {
            (this.listEntries[_i1] as JobCrafterDirectoryListEntry).serializeAs_JobCrafterDirectoryListEntry(output);
        }
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