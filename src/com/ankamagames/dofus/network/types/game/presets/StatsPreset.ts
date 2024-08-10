import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SimpleCharacterCharacteristicForPreset } from "./SimpleCharacterCharacteristicForPreset";
import { Preset } from "./Preset";

export class StatsPreset extends Preset implements INetworkType
{

	public static readonly protocolId: number = 1993;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public stats: Array<SimpleCharacterCharacteristicForPreset>;

    public constructor()
    {
        super();
        this.stats = Array<SimpleCharacterCharacteristicForPreset>();
    }

    public getTypeId()
    {
        return StatsPreset.protocolId;
    }

    public isEndpointClient()
    {
        return StatsPreset.endpointClient;
    }

    public isEndpointServer()
    {
        return StatsPreset.endpointServer;
    }

    public initStatsPreset(id: number = 0, stats: Array<SimpleCharacterCharacteristicForPreset> = null): StatsPreset
    {
        super.initPreset(id);
        this.stats = stats;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_StatsPreset(output);
    }

    public serializeAs_StatsPreset(output: ICustomDataOutput)
    {
        super.serializeAs_Preset(output);
        output.writeShort(this.stats.length);
        for(var _i1: number = 0; _i1 < this.stats.length; _i1++)
        {
            (this.stats[_i1] as SimpleCharacterCharacteristicForPreset).serializeAs_SimpleCharacterCharacteristicForPreset(output);
        }
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