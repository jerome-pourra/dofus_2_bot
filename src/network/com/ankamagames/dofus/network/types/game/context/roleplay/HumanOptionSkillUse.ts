import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionSkillUse extends HumanOption
{

	public static readonly protocolId: number = 2036;

	public elementId: number = 0;
	public skillId: number = 0;
	public skillEndTime: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionSkillUse(input);
    }

    private deserializeAs_HumanOptionSkillUse(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._elementIdFunc(input);
        this._skillIdFunc(input);
        this._skillEndTimeFunc(input);
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readVarUhInt();
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element of HumanOptionSkillUse.elementId.");
        }
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhShort();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of HumanOptionSkillUse.skillId.");
        }
    }

    private _skillEndTimeFunc(input: ICustomDataInput)
    {
        this.skillEndTime = input.readDouble();
        if(this.skillEndTime < -9007199254740992 || this.skillEndTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.skillEndTime + ") on element of HumanOptionSkillUse.skillEndTime.");
        }
    }

}