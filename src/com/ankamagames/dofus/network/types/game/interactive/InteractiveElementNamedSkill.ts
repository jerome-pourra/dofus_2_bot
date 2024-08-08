import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { InteractiveElementSkill } from "./InteractiveElementSkill";

export class InteractiveElementNamedSkill extends InteractiveElementSkill implements INetworkType
{

	public static readonly protocolId: number = 7880;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public nameId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return InteractiveElementNamedSkill.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveElementNamedSkill.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveElementNamedSkill.endpointServer;
    }

    public initInteractiveElementNamedSkill(skillId: number = 0, skillInstanceUid: number = 0, nameId: number = 0): InteractiveElementNamedSkill
    {
        super.initInteractiveElementSkill(skillId,skillInstanceUid);
        this.nameId = nameId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_InteractiveElementNamedSkill(output);
    }

    public serializeAs_InteractiveElementNamedSkill(output: ICustomDataOutput)
    {
        super.serializeAs_InteractiveElementSkill(output);
        if(this.nameId < 0)
        {
            throw new Error("Forbidden value (" + this.nameId + ") on element nameId.");
        }
        output.writeVarInt(this.nameId);
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