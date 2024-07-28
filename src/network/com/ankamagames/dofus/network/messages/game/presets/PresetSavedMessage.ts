import { Preset } from "./../../../types/game/presets/Preset";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetSavedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 889;

	public presetId: number = 0;
	public preset: Preset;

    public constructor()
    {
        super();
        this.preset = new Preset();
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