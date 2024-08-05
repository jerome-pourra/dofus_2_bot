import { TaxCollectorPreset } from "./../../../../types/game/collector/tax/TaxCollectorPreset";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorPresetsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9900;

	public presets: Array<TaxCollectorPreset>;

    public constructor()
    {
        super();
        this.presets = Array<TaxCollectorPreset>();
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
        this.deserializeAs_TaxCollectorPresetsMessage(input);
    }

    private deserializeAs_TaxCollectorPresetsMessage(input: ICustomDataInput)
    {
        let _item1: TaxCollectorPreset;
        let _presetsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _presetsLen; _i1++)
        {
            _item1 = new TaxCollectorPreset();
            _item1.deserialize(input);
            this.presets.push(_item1);
        }
    }

}