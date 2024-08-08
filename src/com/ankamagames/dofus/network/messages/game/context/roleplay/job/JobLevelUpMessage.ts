import { JobDescription } from "./../../../../../types/game/context/roleplay/job/JobDescription";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobLevelUpMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 386;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public newLevel: number = 0;
	public jobsDescription: JobDescription;

    public constructor()
    {
        super();
        this.jobsDescription = new JobDescription();
    }

    public getMessageId()
    {
        return JobLevelUpMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobLevelUpMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobLevelUpMessage.endpointServer;
    }

    public initJobLevelUpMessage(newLevel: number = 0, jobsDescription: JobDescription = null): JobLevelUpMessage
    {
        this.newLevel = newLevel;
        this.jobsDescription = jobsDescription;
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
        this.serializeAs_JobLevelUpMessage(output);
    }

    public serializeAs_JobLevelUpMessage(output: ICustomDataOutput)
    {
        if(this.newLevel < 0 || this.newLevel > 255)
        {
            throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
        }
        output.writeByte(this.newLevel);
        this.jobsDescription.serializeAs_JobDescription(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobLevelUpMessage(input);
    }

    private deserializeAs_JobLevelUpMessage(input: ICustomDataInput)
    {
        this._newLevelFunc(input);
        this.jobsDescription = new JobDescription();
        this.jobsDescription.deserialize(input);
    }

    private _newLevelFunc(input: ICustomDataInput)
    {
        this.newLevel = input.readUnsignedByte();
        if(this.newLevel < 0 || this.newLevel > 255)
        {
            throw new Error("Forbidden value (" + this.newLevel + ") on element of JobLevelUpMessage.newLevel.");
        }
    }

}