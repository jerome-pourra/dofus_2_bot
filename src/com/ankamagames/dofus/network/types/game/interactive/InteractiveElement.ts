import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { InteractiveElementSkill } from "./InteractiveElementSkill";

export class InteractiveElement implements INetworkType
{

	public static readonly protocolId: number = 6065;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public elementId: number = 0;
	public elementTypeId: number = 0;
	public enabledSkills: Array<InteractiveElementSkill>;
	public disabledSkills: Array<InteractiveElementSkill>;
	public onCurrentMap: boolean = false;

    public constructor()
    {
        this.enabledSkills = Array<InteractiveElementSkill>();
        this.disabledSkills = Array<InteractiveElementSkill>();
    }

    public getTypeId()
    {
        return InteractiveElement.protocolId;
    }

    public isEndpointClient()
    {
        return InteractiveElement.endpointClient;
    }

    public isEndpointServer()
    {
        return InteractiveElement.endpointServer;
    }

    public initInteractiveElement(elementId: number = 0, elementTypeId: number = 0, enabledSkills: Array<InteractiveElementSkill> = null, disabledSkills: Array<InteractiveElementSkill> = null, onCurrentMap: boolean = false): InteractiveElement
    {
        this.elementId = elementId;
        this.elementTypeId = elementTypeId;
        this.enabledSkills = enabledSkills;
        this.disabledSkills = disabledSkills;
        this.onCurrentMap = onCurrentMap;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_InteractiveElement(output);
    }

    public serializeAs_InteractiveElement(output: ICustomDataOutput)
    {
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element elementId.");
        }
        output.writeInt(this.elementId);
        output.writeInt(this.elementTypeId);
        output.writeShort(this.enabledSkills.length);
        for(var _i3: number = 0; _i3 < this.enabledSkills.length; _i3++)
        {
            output.writeShort((this.enabledSkills[_i3] as InteractiveElementSkill).getTypeId());
            (this.enabledSkills[_i3] as InteractiveElementSkill).serialize(output);
        }
        output.writeShort(this.disabledSkills.length);
        for(var _i4: number = 0; _i4 < this.disabledSkills.length; _i4++)
        {
            output.writeShort((this.disabledSkills[_i4] as InteractiveElementSkill).getTypeId());
            (this.disabledSkills[_i4] as InteractiveElementSkill).serialize(output);
        }
        output.writeBoolean(this.onCurrentMap);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveElement(input);
    }

    private deserializeAs_InteractiveElement(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: InteractiveElementSkill;
        let _id4: number = 0;
        let _item4: InteractiveElementSkill;
        this._elementIdFunc(input);
        this._elementTypeIdFunc(input);
        let _enabledSkillsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _enabledSkillsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(InteractiveElementSkill,_id3);
            _item3.deserialize(input);
            this.enabledSkills.push(_item3);
        }
        let _disabledSkillsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _disabledSkillsLen; _i4++)
        {
            _id4 = input.readUnsignedShort();
            _item4 = ProtocolTypeManager.getInstance(InteractiveElementSkill,_id4);
            _item4.deserialize(input);
            this.disabledSkills.push(_item4);
        }
        this._onCurrentMapFunc(input);
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readInt();
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element of InteractiveElement.elementId.");
        }
    }

    private _elementTypeIdFunc(input: ICustomDataInput)
    {
        this.elementTypeId = input.readInt();
    }

    private _onCurrentMapFunc(input: ICustomDataInput)
    {
        this.onCurrentMap = input.readBoolean();
    }

}