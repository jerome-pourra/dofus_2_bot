import { TaxCollectorPreset } from "./../../../../types/game/collector/tax/TaxCollectorPreset";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorPresetsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9900;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public presets: Array<TaxCollectorPreset>;

    public constructor()
    {
        super();
        this.presets = Array<TaxCollectorPreset>();
    }

    public getMessageId()
    {
        return TaxCollectorPresetsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorPresetsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorPresetsMessage.endpointServer;
    }

    public initTaxCollectorPresetsMessage(presets: Array<TaxCollectorPreset> = null): TaxCollectorPresetsMessage
    {
        this.presets = presets;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TaxCollectorPresetsMessage(output);
    }

    public serializeAs_TaxCollectorPresetsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presets.length);
        for(var _i1: number = 0; _i1 < this.presets.length; _i1++)
        {
            (this.presets[_i1] as TaxCollectorPreset).serializeAs_TaxCollectorPreset(output);
        }
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