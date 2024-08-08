import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ClientKeyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7975;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public key: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ClientKeyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ClientKeyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ClientKeyMessage.endpointServer;
    }

    public initClientKeyMessage(key: string = ""): ClientKeyMessage
    {
        this.key = key;
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
        this.serializeAs_ClientKeyMessage(output);
    }

    public serializeAs_ClientKeyMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.key);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ClientKeyMessage(input);
    }

    private deserializeAs_ClientKeyMessage(input: ICustomDataInput)
    {
        this._keyFunc(input);
    }

    private _keyFunc(input: ICustomDataInput)
    {
        this.key = input.readUTF();
    }

}