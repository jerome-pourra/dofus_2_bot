import { JobDescription } from "./../../../../../types/game/context/roleplay/job/JobDescription";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobDescriptionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9539;

	public jobsDescription: Array<JobDescription>;

    public constructor()
    {
        super();
        this.jobsDescription = Array<JobDescription>();
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