import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { InteractiveElementSkill } from "./InteractiveElementSkill";
import { InteractiveElement } from "./InteractiveElement";

export class InteractiveElementWithAgeBonus extends InteractiveElement implements INetworkType
{

	public static readonly protocolId: number = 2952;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ageBonus: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return InteractiveElementWithAgeBonus.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveElementWithAgeBonus.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveElementWithAgeBonus.endpointServer;
    }

    public initInteractiveElementWithAgeBonus(elementId: number = 0, elementTypeId: number = 0, enabledSkills: Array<InteractiveElementSkill> = null, disabledSkills: Array<InteractiveElementSkill> = null, onCurrentMap: boolean = false, ageBonus: number = 0): InteractiveElementWithAgeBonus
    {
        super.initInteractiveElement(elementId,elementTypeId,enabledSkills,disabledSkills,onCurrentMap);
        this.ageBonus = ageBonus;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_InteractiveElementWithAgeBonus(output);
    }

    public serializeAs_InteractiveElementWithAgeBonus(output: ICustomDataOutput)
    {
        super.serializeAs_InteractiveElement(output);
        if(this.ageBonus < -1 || this.ageBonus > 1000)
        {
            throw new Error("Forbidden value (" + this.ageBonus + ") on element ageBonus.");
        }
        output.writeShort(this.ageBonus);
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