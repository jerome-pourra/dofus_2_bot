import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SkillActionDescription
{

	public static readonly protocolId: number = 3573;

	public skillId: number = 0;

    public constructor()
    {

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