import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { InteractiveElement } from "./InteractiveElement";

export class InteractiveElementWithAgeBonus extends InteractiveElement
{

	public static readonly protocolId: number = 2952;

	public ageBonus: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveElementWithAgeBonus(input);
    }

    private deserializeAs_InteractiveElementWithAgeBonus(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._ageBonusFunc(input);
    }

    private _ageBonusFunc(input: ICustomDataInput)
    {
        this.ageBonus = input.readShort();
        if(this.ageBonus < -1 || this.ageBonus > 1000)
        {
            throw new Error("Forbidden value (" + this.ageBonus + ") on element of InteractiveElementWithAgeBonus.ageBonus.");
        }
    }

}