import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SkillActionDescription } from "./SkillActionDescription";

export class SkillActionDescriptionTimed extends SkillActionDescription
{

	public static readonly protocolId: number = 1078;

	public time: number = 0;

    public constructor()
    {
        super();
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