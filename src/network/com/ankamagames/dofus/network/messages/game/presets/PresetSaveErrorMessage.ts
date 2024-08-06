import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PresetSaveErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7630;

	public presetId: number = 0;
	public code: number = 2;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PresetSaveErrorMessage.protocolId;
    }

    public initPresetSaveErrorMessage(presetId: number = 0, code: number = 2): PresetSaveErrorMessage
    {
        this.presetId = presetId;
        this.code = code;
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
        this.serializeAs_PresetSaveErrorMessage(output);
    }

    public serializeAs_PresetSaveErrorMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presetId);
        output.writeByte(this.code);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PresetSaveErrorMessage(input);
    }

    private deserializeAs_PresetSaveErrorMessage(input: ICustomDataInput)
    {
        this._presetIdFunc(input);
        this._codeFunc(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

    private _codeFunc(input: ICustomDataInput)
    {
        this.code = input.readByte();
        if(this.code < 0)
        {
            throw new Error("Forbidden value (" + this.code + ") on element of PresetSaveErrorMessage.code.");
        }
    }

}