import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class InteractiveElementSkill implements INetworkType
{

	public static readonly protocolId: number = 2087;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public skillId: number = 0;
	public skillInstanceUid: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return InteractiveElementSkill.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveElementSkill.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveElementSkill.endpointServer;
    }

    public initInteractiveElementSkill(skillId: number = 0, skillInstanceUid: number = 0): InteractiveElementSkill
    {
        this.skillId = skillId;
        this.skillInstanceUid = skillInstanceUid;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_InteractiveElementSkill(output);
    }

    public serializeAs_InteractiveElementSkill(output: ICustomDataOutput)
    {
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarInt(this.skillId);
        if(this.skillInstanceUid < 0)
        {
            throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element skillInstanceUid.");
        }
        output.writeInt(this.skillInstanceUid);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveElementSkill(input);
    }

    private deserializeAs_InteractiveElementSkill(input: ICustomDataInput)
    {
        this._skillIdFunc(input);
        this._skillInstanceUidFunc(input);
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhInt();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of InteractiveElementSkill.skillId.");
        }
    }

    private _skillInstanceUidFunc(input: ICustomDataInput)
    {
        this.skillInstanceUid = input.readInt();
        if(this.skillInstanceUid < 0)
        {
            throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveElementSkill.skillInstanceUid.");
        }
    }

}