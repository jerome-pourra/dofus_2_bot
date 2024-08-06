import { JobCrafterDirectoryListEntry } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryListEntry";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryAddMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9328;

	public listEntry: JobCrafterDirectoryListEntry;

    public constructor()
    {
        super();
        this.listEntry = new JobCrafterDirectoryListEntry();
    }

    public getMessageId()
    {
        return JobCrafterDirectoryAddMessage.protocolId;
    }

    public initJobCrafterDirectoryAddMessage(listEntry: JobCrafterDirectoryListEntry = null): JobCrafterDirectoryAddMessage
    {
        this.listEntry = listEntry;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_JobCrafterDirectoryAddMessage(output);
    }

    public serializeAs_JobCrafterDirectoryAddMessage(output: ICustomDataOutput)
    {
        this.listEntry.serializeAs_JobCrafterDirectoryListEntry(output);
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