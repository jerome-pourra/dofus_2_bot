import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SkillActionDescription } from "./SkillActionDescription";

export class SkillActionDescriptionTimed extends SkillActionDescription implements INetworkType
{

	public static readonly protocolId: number = 1078;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public time: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SkillActionDescriptionTimed.protocolId;
    }

    public isEndpointClient()
    {
        return SkillActionDescriptionTimed.endpointClient;
    }

    public isEndpointServer()
    {
        return SkillActionDescriptionTimed.endpointServer;
    }

    public initSkillActionDescriptionTimed(skillId: number = 0, time: number = 0): SkillActionDescriptionTimed
    {
        super.initSkillActionDescription(skillId);
        this.time = time;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SkillActionDescriptionTimed(output);
    }

    public serializeAs_SkillActionDescriptionTimed(output: ICustomDataOutput)
    {
        super.serializeAs_SkillActionDescription(output);
        if(this.time < 0 || this.time > 255)
        {
            throw new Error("Forbidden value (" + this.time + ") on element time.");
        }
        output.writeByte(this.time);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SkillActionDescriptionTimed(input);
    }

    private deserializeAs_SkillActionDescriptionTimed(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._timeFunc(input);
    }

    private _timeFunc(input: ICustomDataInput)
    {
        this.time = input.readUnsignedByte();
        if(this.time < 0 || this.time > 255)
        {
            throw new Error("Forbidden value (" + this.time + ") on element of SkillActionDescriptionTimed.time.");
        }
    }

}