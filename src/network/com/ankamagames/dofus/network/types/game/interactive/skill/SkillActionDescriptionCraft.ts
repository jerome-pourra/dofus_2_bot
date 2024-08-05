import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SkillActionDescription } from "./SkillActionDescription";

export class SkillActionDescriptionCraft extends SkillActionDescription
{

	public static readonly protocolId: number = 5905;

	public probability: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SkillActionDescriptionCraft(input);
    }

    private deserializeAs_SkillActionDescriptionCraft(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._probabilityFunc(input);
    }

    private _probabilityFunc(input: ICustomDataInput)
    {
        this.probability = input.readByte();
        if(this.probability < 0)
        {
            throw new Error("Forbidden value (" + this.probability + ") on element of SkillActionDescriptionCraft.probability.");
        }
    }

}