import { JobDescription } from "./../../../../../types/game/context/roleplay/job/JobDescription";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobLevelUpMessage extends NetworkMessage
{

	public static readonly protocolId: number = 386;

	public newLevel: number = 0;
	public jobsDescription: JobDescription;

    public constructor()
    {
        super();
        this.jobsDescription = new JobDescription();
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