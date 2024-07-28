import { SkillActionDescription } from "./../../../interactive/skill/SkillActionDescription";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobDescription
{

	public static readonly protocolId: number = 4698;

	public jobId: number = 0;
	public skills: Array<SkillActionDescription>;

    public constructor()
    {
        this.skills = Array<SkillActionDescription>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobDescription(input);
    }

    private deserializeAs_JobDescription(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: SkillActionDescription;
        this._jobIdFunc(input);
        let _skillsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _skillsLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(SkillActionDescription,_id2);
            _item2.deserialize(input);
            this.skills.push(_item2);
        }
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobDescription.jobId.");
        }
    }

}