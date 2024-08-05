import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SkillActionDescriptionTimed } from "./SkillActionDescriptionTimed";

export class SkillActionDescriptionCollect extends SkillActionDescriptionTimed
{

	public static readonly protocolId: number = 5684;

	public min: number = 0;
	public max: number = 0;

    public constructor()
    {
        super();
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