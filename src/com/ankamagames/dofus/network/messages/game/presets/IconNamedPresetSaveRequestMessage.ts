import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { IconPresetSaveRequestMessage } from "./IconPresetSaveRequestMessage";

export class IconNamedPresetSaveRequestMessage extends IconPresetSaveRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6922;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public name: string = "";
	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IconNamedPresetSaveRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IconNamedPresetSaveRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IconNamedPresetSaveRequestMessage.endpointServer;
    }

    public initIconNamedPresetSaveRequestMessage(presetId: number = 0, symbolId: number = 0, updateData: boolean = false, name: string = "", type: number = 0): IconNamedPresetSaveRequestMessage
    {
        super.initIconPresetSaveRequestMessage(presetId,symbolId,updateData);
        this.name = name;
        this.type = type;
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
        this.serializeAs_IconNamedPresetSaveRequestMessage(output);
    }

    public serializeAs_IconNamedPresetSaveRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_IconPresetSaveRequestMessage(output);
        output.writeUTF(this.name);
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IconNamedPresetSaveRequestMessage(input);
    }

    private deserializeAs_IconNamedPresetSaveRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
        this._typeFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of IconNamedPresetSaveRequestMessage.type.");
        }
    }

}