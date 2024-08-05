import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { Preset } from "./Preset";

export class PresetsContainerPreset extends Preset
{

	public static readonly protocolId: number = 5695;

	public presets: Array<Preset>;

    public constructor()
    {
        super();
        this.presets = Array<Preset>();
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