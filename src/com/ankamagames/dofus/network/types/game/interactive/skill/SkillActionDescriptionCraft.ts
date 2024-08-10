import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SkillActionDescription } from "./SkillActionDescription";

export class SkillActionDescriptionCraft extends SkillActionDescription implements INetworkType
{

	public static readonly protocolId: number = 5905;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public probability: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SkillActionDescriptionCraft.protocolId;
    }

    public isEndpointClient()
    {
        return SkillActionDescriptionCraft.endpointClient;
    }

    public isEndpointServer()
    {
        return SkillActionDescriptionCraft.endpointServer;
    }

    public initSkillActionDescriptionCraft(skillId: number = 0, probability: number = 0): SkillActionDescriptionCraft
    {
        super.initSkillActionDescription(skillId);
        this.probability = probability;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SkillActionDescriptionCraft(output);
    }

    public serializeAs_SkillActionDescriptionCraft(output: ICustomDataOutput)
    {
        super.serializeAs_SkillActionDescription(output);
        if(this.probability < 0)
        {
            throw new Error("Forbidden value (" + this.probability + ") on element probability.");
        }
        output.writeByte(this.probability);
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