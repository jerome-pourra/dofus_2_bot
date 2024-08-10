import { Preset } from "./../../../types/game/presets/Preset";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8873;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public presets: Array<Preset>;

    public constructor()
    {
        super();
        this.presets = Array<Preset>();
    }

    public getMessageId()
    {
        return PresetsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PresetsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PresetsMessage.endpointServer;
    }

    public initPresetsMessage(presets: Array<Preset> = null): PresetsMessage
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
        this.serializeAs_PresetsMessage(output);
    }

    public serializeAs_PresetsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presets.length);
        for(var _i1: number = 0; _i1 < this.presets.length; _i1++)
        {
            output.writeShort((this.presets[_i1] as Preset).getTypeId());
            (this.presets[_i1] as Preset).serialize(output);
        }
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