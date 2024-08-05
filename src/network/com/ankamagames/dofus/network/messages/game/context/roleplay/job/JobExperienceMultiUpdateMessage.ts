import { JobExperience } from "./../../../../../types/game/context/roleplay/job/JobExperience";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobExperienceMultiUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8763;

	public experiencesUpdate: Array<JobExperience>;

    public constructor()
    {
        super();
        this.experiencesUpdate = Array<JobExperience>();
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
        this.deserializeAs_JobExperienceMultiUpdateMessage(input);
    }

    private deserializeAs_JobExperienceMultiUpdateMessage(input: ICustomDataInput)
    {
        let _item1: JobExperience;
        let _experiencesUpdateLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _experiencesUpdateLen; _i1++)
        {
            _item1 = new JobExperience();
            _item1.deserialize(input);
            this.experiencesUpdate.push(_item1);
        }
    }

}