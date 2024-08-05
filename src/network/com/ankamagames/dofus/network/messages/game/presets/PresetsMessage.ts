import { Preset } from "./../../../types/game/presets/Preset";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8873;

	public presets: Array<Preset>;

    public constructor()
    {
        super();
        this.presets = Array<Preset>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetsMessage(input);
    }

    private deserializeAs_PresetsMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: Preset;
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