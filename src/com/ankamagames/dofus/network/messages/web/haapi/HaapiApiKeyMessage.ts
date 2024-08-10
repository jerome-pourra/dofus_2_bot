import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiApiKeyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4765;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public token: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiApiKeyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HaapiApiKeyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HaapiApiKeyMessage.endpointServer;
    }

    public initHaapiApiKeyMessage(token: string = ""): HaapiApiKeyMessage
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
        this.serializeAs_HaapiApiKeyMessage(output);
    }

    public serializeAs_HaapiApiKeyMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.token);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiApiKeyMessage(input);
    }

    private deserializeAs_HaapiApiKeyMessage(input: ICustomDataInput)
    {
        this._tokenFunc(input);
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}