import { JobExperience } from "./../../../../../types/game/context/roleplay/job/JobExperience";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobExperienceUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6979;

	public experiencesUpdate: JobExperience;

    public constructor()
    {
        super();
        this.experiencesUpdate = new JobExperience();
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
        this.deserializeAs_JobExperienceUpdateMessage(input);
    }

    private deserializeAs_JobExperienceUpdateMessage(input: ICustomDataInput)
    {
        this.experiencesUpdate = new JobExperience();
        this.experiencesUpdate.deserialize(input);
    }

}