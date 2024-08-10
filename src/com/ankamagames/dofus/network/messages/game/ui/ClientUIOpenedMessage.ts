import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ClientUIOpenedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1039;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ClientUIOpenedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ClientUIOpenedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ClientUIOpenedMessage.endpointServer;
    }

    public initClientUIOpenedMessage(type: number = 0): ClientUIOpenedMessage
    {
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
        this.serializeAs_ClientUIOpenedMessage(output);
    }

    public serializeAs_ClientUIOpenedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ClientUIOpenedMessage(input);
    }

    private deserializeAs_ClientUIOpenedMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of ClientUIOpenedMessage.type.");
        }
    }

}