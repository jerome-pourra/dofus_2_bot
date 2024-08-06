import { JobDescription } from "./../../../../../types/game/context/roleplay/job/JobDescription";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobDescriptionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9539;

	public jobsDescription: Array<JobDescription>;

    public constructor()
    {
        super();
        this.jobsDescription = Array<JobDescription>();
    }

    public getMessageId()
    {
        return JobDescriptionMessage.protocolId;
    }

    public initJobDescriptionMessage(jobsDescription: Array<JobDescription> = null): JobDescriptionMessage
    {
        this.jobsDescription = jobsDescription;
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
        this.serializeAs_JobDescriptionMessage(output);
    }

    public serializeAs_JobDescriptionMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.jobsDescription.length);
        for(var _i1: number = 0; _i1 < this.jobsDescription.length; _i1++)
        {
            (this.jobsDescription[_i1] as JobDescription).serializeAs_JobDescription(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobDescriptionMessage(input);
    }

    private deserializeAs_JobDescriptionMessage(input: ICustomDataInput)
    {
        let _item1: JobDescription;
        let _jobsDescriptionLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _jobsDescriptionLen; _i1++)
        {
            _item1 = new JobDescription();
            _item1.deserialize(input);
            this.jobsDescription.push(_item1);
        }
    }

}