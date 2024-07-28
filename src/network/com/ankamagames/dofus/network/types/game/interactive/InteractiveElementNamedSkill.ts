import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { InteractiveElementSkill } from "./InteractiveElementSkill";

export class InteractiveElementNamedSkill extends InteractiveElementSkill
{

	public static readonly protocolId: number = 7880;

	public nameId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveElementNamedSkill(input);
    }

    private deserializeAs_InteractiveElementNamedSkill(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameIdFunc(input);
    }

    private _nameIdFunc(input: ICustomDataInput)
    {
        this.nameId = input.readVarUhInt();
        if(this.nameId < 0)
        {
            throw new Error("Forbidden value (" + this.nameId + ") on element of InteractiveElementNamedSkill.nameId.");
        }
    }

}