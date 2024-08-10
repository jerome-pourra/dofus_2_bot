import { Preset } from "./../../../types/game/presets/Preset";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetSavedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 889;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public presetId: number = 0;
	public preset: Preset;

    public constructor()
    {
        super();
        this.preset = new Preset();
    }

    public getMessageId()
    {
        return PresetSavedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PresetSavedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PresetSavedMessage.endpointServer;
    }

    public initPresetSavedMessage(presetId: number = 0, preset: Preset = null): PresetSavedMessage
    {
        this.presetId = presetId;
        this.preset = preset;
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
        this.serializeAs_PresetSavedMessage(output);
    }

    public serializeAs_PresetSavedMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presetId);
        output.writeShort(this.preset.getTypeId());
        this.preset.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetSavedMessage(input);
    }

    private deserializeAs_PresetSavedMessage(input: ICustomDataInput)
    {
        this._presetIdFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.preset = ProtocolTypeManager.getInstance(Preset,_id2);
        this.preset.deserialize(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

}