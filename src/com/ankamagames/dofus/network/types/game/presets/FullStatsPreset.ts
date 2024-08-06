import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristicForPreset } from "./CharacterCharacteristicForPreset";
import { Preset } from "./Preset";

export class FullStatsPreset extends Preset implements INetworkType
{

	public static readonly protocolId: number = 4653;

	public stats: Array<CharacterCharacteristicForPreset>;

    public constructor()
    {
        super();
        this.stats = Array<CharacterCharacteristicForPreset>();
    }

    public getTypeId()
    {
        return FullStatsPreset.protocolId;
    }

    public initFullStatsPreset(id: number = 0, stats: Array<CharacterCharacteristicForPreset> = null): FullStatsPreset
    {
        super.initPreset(id);
        this.stats = stats;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FullStatsPreset(output);
    }

    public serializeAs_FullStatsPreset(output: ICustomDataOutput)
    {
        super.serializeAs_Preset(output);
        output.writeShort(this.stats.length);
        for(var _i1: number = 0; _i1 < this.stats.length; _i1++)
        {
            (this.stats[_i1] as CharacterCharacteristicForPreset).serializeAs_CharacterCharacteristicForPreset(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FullStatsPreset(input);
    }

    private deserializeAs_FullStatsPreset(input: ICustomDataInput)
    {
        let _item1: CharacterCharacteristicForPreset;
        super.deserialize(input);
        let _statsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _statsLen; _i1++)
        {
            _item1 = new CharacterCharacteristicForPreset();
            _item1.deserialize(input);
            this.stats.push(_item1);
        }
    }

}