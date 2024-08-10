import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChangeThemeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4899;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public theme: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChangeThemeRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChangeThemeRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChangeThemeRequestMessage.endpointServer;
    }

    public initChangeThemeRequestMessage(theme: number = 0): ChangeThemeRequestMessage
    {
        this.theme = theme;
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
        this.serializeAs_ChangeThemeRequestMessage(output);
    }

    public serializeAs_ChangeThemeRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.theme);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChangeThemeRequestMessage(input);
    }

    private deserializeAs_ChangeThemeRequestMessage(input: ICustomDataInput)
    {
        this._themeFunc(input);
    }

    private _themeFunc(input: ICustomDataInput)
    {
        this.theme = input.readByte();
    }

}