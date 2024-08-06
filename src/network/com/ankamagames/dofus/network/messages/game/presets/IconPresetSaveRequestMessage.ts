import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IconPresetSaveRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6591;

	public presetId: number = 0;
	public symbolId: number = 0;
	public updateData: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IconPresetSaveRequestMessage.protocolId;
    }

    public initIconPresetSaveRequestMessage(presetId: number = 0, symbolId: number = 0, updateData: boolean = false): IconPresetSaveRequestMessage
    {
        this.presetId = presetId;
        this.symbolId = symbolId;
        this.updateData = updateData;
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
        this.serializeAs_IconPresetSaveRequestMessage(output);
    }

    public serializeAs_IconPresetSaveRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.presetId);
        if(this.symbolId < 0)
        {
            throw new Error("Forbidden value (" + this.symbolId + ") on element symbolId.");
        }
        output.writeByte(this.symbolId);
        output.writeBoolean(this.updateData);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IconPresetSaveRequestMessage(input);
    }

    private deserializeAs_IconPresetSaveRequestMessage(input: ICustomDataInput)
    {
        this._presetIdFunc(input);
        this._symbolIdFunc(input);
        this._updateDataFunc(input);
    }

    private _presetIdFunc(input: ICustomDataInput)
    {
        this.presetId = input.readShort();
    }

    private _symbolIdFunc(input: ICustomDataInput)
    {
        this.symbolId = input.readByte();
        if(this.symbolId < 0)
        {
            throw new Error("Forbidden value (" + this.symbolId + ") on element of IconPresetSaveRequestMessage.symbolId.");
        }
    }

    private _updateDataFunc(input: ICustomDataInput)
    {
        this.updateData = input.readBoolean();
    }

}