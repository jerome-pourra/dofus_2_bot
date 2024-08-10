import { JobExperience } from "./../../../../../types/game/context/roleplay/job/JobExperience";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobExperienceMultiUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8763;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public experiencesUpdate: Array<JobExperience>;

    public constructor()
    {
        super();
        this.experiencesUpdate = Array<JobExperience>();
    }

    public getMessageId()
    {
        return JobExperienceMultiUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobExperienceMultiUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobExperienceMultiUpdateMessage.endpointServer;
    }

    public initJobExperienceMultiUpdateMessage(experiencesUpdate: Array<JobExperience> = null): JobExperienceMultiUpdateMessage
    {
        this.experiencesUpdate = experiencesUpdate;
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
        this.serializeAs_JobExperienceMultiUpdateMessage(output);
    }

    public serializeAs_JobExperienceMultiUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.experiencesUpdate.length);
        for(var _i1: number = 0; _i1 < this.experiencesUpdate.length; _i1++)
        {
            (this.experiencesUpdate[_i1] as JobExperience).serializeAs_JobExperience(output);
        }
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