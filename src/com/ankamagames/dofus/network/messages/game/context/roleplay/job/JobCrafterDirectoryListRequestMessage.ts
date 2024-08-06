import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5876;

	public jobId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return JobCrafterDirectoryListRequestMessage.protocolId;
    }

    public initJobCrafterDirectoryListRequestMessage(jobId: number = 0): JobCrafterDirectoryListRequestMessage
    {
        this.jobId = jobId;
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
        this.serializeAs_JobCrafterDirectoryListRequestMessage(output);
    }

    public serializeAs_JobCrafterDirectoryListRequestMessage(output: ICustomDataOutput)
    {
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
        }
        output.writeByte(this.jobId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryListRequestMessage(input);
    }

    private deserializeAs_JobCrafterDirectoryListRequestMessage(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryListRequestMessage.jobId.");
        }
    }

}