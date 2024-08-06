import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetDeleteRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7052;

	public presetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PresetDeleteRequestMessage.protocolId;
    }

    public initPresetDeleteRequestMessage(presetId: number = 0): PresetDeleteRequestMessage
    {
        this.presetId = presetId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PresetDeleteRequestMessage(output);
    }

    public serializeAs_PresetDeleteRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetDeleteRequestMessage(input);
    }

    private deserializeAs_PresetDeleteRequestMessage(input: ICustomDataInput)
    {
        this._presetIdFunc(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

}