import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SkillActionDescriptionTimed } from "./SkillActionDescriptionTimed";

export class SkillActionDescriptionCollect extends SkillActionDescriptionTimed implements INetworkType
{

	public static readonly protocolId: number = 5684;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public min: number = 0;
	public max: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SkillActionDescriptionCollect.protocolId;
    }

    public isEndpointClient()
    {
        return SkillActionDescriptionCollect.endpointClient;
    }

    public isEndpointServer()
    {
        return SkillActionDescriptionCollect.endpointServer;
    }

    public initSkillActionDescriptionCollect(skillId: number = 0, time: number = 0, min: number = 0, max: number = 0): SkillActionDescriptionCollect
    {
        super.initSkillActionDescriptionTimed(skillId,time);
        this.min = min;
        this.max = max;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SkillActionDescriptionCollect(output);
    }

    public serializeAs_SkillActionDescriptionCollect(output: ICustomDataOutput)
    {
        super.serializeAs_SkillActionDescriptionTimed(output);
        if(this.min < 0)
        {
            throw new Error("Forbidden value (" + this.min + ") on element min.");
        }
        output.writeVarShort(this.min);
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element max.");
        }
        output.writeVarShort(this.max);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SkillActionDescriptionCollect(input);
    }

    private deserializeAs_SkillActionDescriptionCollect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minFunc(input);
        this._maxFunc(input);
    }

    private _minFunc(input: ICustomDataInput)
    {
        this.min = input.readVarUhShort();
        if(this.min < 0)
        {
            throw new Error("Forbidden value (" + this.min + ") on element of SkillActionDescriptionCollect.min.");
        }
    }

    private _maxFunc(input: ICustomDataInput)
    {
        this.max = input.readVarUhShort();
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element of SkillActionDescriptionCollect.max.");
        }
    }

}