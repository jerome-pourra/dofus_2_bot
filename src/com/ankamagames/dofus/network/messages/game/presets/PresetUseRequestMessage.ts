import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetUseRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7506;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public presetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PresetUseRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PresetUseRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PresetUseRequestMessage.endpointServer;
    }

    public initPresetUseRequestMessage(presetId: number = 0): PresetUseRequestMessage
    {
        this.presetId = presetId;
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
        this.serializeAs_PresetUseRequestMessage(output);
    }

    public serializeAs_PresetUseRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetUseRequestMessage(input);
    }

    private deserializeAs_PresetUseRequestMessage(input: ICustomDataInput)
    {
        this._presetIdFunc(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

}