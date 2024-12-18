import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Preset } from "./Preset";

export class PresetsContainerPreset extends Preset implements INetworkType
{

	public static readonly protocolId: number = 5695;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public presets: Array<Preset>;

    public constructor()
    {
        super();
        this.presets = Array<Preset>();
    }

    public getTypeId()
    {
        return PresetsContainerPreset.protocolId;
    }

    public isEndpointClient()
    {
        return PresetsContainerPreset.endpointClient;
    }

    public isEndpointServer()
    {
        return PresetsContainerPreset.endpointServer;
    }

    public initPresetsContainerPreset(id: number = 0, presets: Array<Preset> = null): PresetsContainerPreset
    {
        super.initPreset(id);
        this.presets = presets;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PresetsContainerPreset(output);
    }

    public serializeAs_PresetsContainerPreset(output: ICustomDataOutput)
    {
        super.serializeAs_Preset(output);
        output.writeShort(this.presets.length);
        for(var _i1: number = 0; _i1 < this.presets.length; _i1++)
        {
            output.writeShort((this.presets[_i1] as Preset).getTypeId());
            (this.presets[_i1] as Preset).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetsContainerPreset(input);
    }

    private deserializeAs_PresetsContainerPreset(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: Preset;
        super.deserialize(input);
        let _presetsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _presetsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(Preset,_id1);
            _item1.deserialize(input);
            this.presets.push(_item1);
        }
    }

}