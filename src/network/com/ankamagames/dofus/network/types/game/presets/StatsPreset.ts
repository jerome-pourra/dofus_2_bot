import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SimpleCharacterCharacteristicForPreset } from "./SimpleCharacterCharacteristicForPreset";
import { Preset } from "./Preset";

export class StatsPreset extends Preset
{

	public static readonly protocolId: number = 1993;

	public stats: Array<SimpleCharacterCharacteristicForPreset>;

    public constructor()
    {
        super();
        this.stats = Array<SimpleCharacterCharacteristicForPreset>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StatsPreset(input);
    }

    private deserializeAs_StatsPreset(input: ICustomDataInput)
    {
        let _item1: SimpleCharacterCharacteristicForPreset;
        super.deserialize(input);
        let _statsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _statsLen; _i1++)
        {
            _item1 = new SimpleCharacterCharacteristicForPreset();
            _item1.deserialize(input);
            this.stats.push(_item1);
        }
    }

}