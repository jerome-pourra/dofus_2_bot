import { JobExperience } from "./../../../../../types/game/context/roleplay/job/JobExperience";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobExperienceUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6979;

	public experiencesUpdate: JobExperience;

    public constructor()
    {
        super();
        this.experiencesUpdate = new JobExperience();
    }

    public getMessageId()
    {
        return JobExperienceUpdateMessage.protocolId;
    }

    public initJobExperienceUpdateMessage(experiencesUpdate: JobExperience = null): JobExperienceUpdateMessage
    {
        this.experiencesUpdate = experiencesUpdate;
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
        this.serializeAs_JobExperienceUpdateMessage(output);
    }

    public serializeAs_JobExperienceUpdateMessage(output: ICustomDataOutput)
    {
        this.experiencesUpdate.serializeAs_JobExperience(output);
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