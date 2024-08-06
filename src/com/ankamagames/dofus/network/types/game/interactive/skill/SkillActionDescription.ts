import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SkillActionDescription implements INetworkType
{

	public static readonly protocolId: number = 3573;

	public skillId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SkillActionDescription.protocolId;
    }

    public initSkillActionDescription(skillId: number = 0): SkillActionDescription
    {
        this.skillId = skillId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SkillActionDescription(output);
    }

    public serializeAs_SkillActionDescription(output: ICustomDataOutput)
    {
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarShort(this.skillId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SkillActionDescription(input);
    }

    private deserializeAs_SkillActionDescription(input: ICustomDataInput)
    {
        this._skillIdFunc(input);
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhShort();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of SkillActionDescription.skillId.");
        }
    }

}