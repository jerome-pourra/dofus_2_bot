import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiShopApiKeyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1934;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public token: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiShopApiKeyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HaapiShopApiKeyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HaapiShopApiKeyMessage.endpointServer;
    }

    public initHaapiShopApiKeyMessage(token: string = ""): HaapiShopApiKeyMessage
    {
        this.token = token;
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
        this.serializeAs_HaapiShopApiKeyMessage(output);
    }

    public serializeAs_HaapiShopApiKeyMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.token);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiShopApiKeyMessage(input);
    }

    private deserializeAs_HaapiShopApiKeyMessage(input: ICustomDataInput)
    {
        this._tokenFunc(input);
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}