import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AuthenticationTicketRefusedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5922;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AuthenticationTicketRefusedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AuthenticationTicketRefusedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AuthenticationTicketRefusedMessage.endpointServer;
    }

    public initAuthenticationTicketRefusedMessage(): AuthenticationTicketRefusedMessage
    {
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
        this.serializeAs_AuthenticationTicketRefusedMessage(output);
    }

    public serializeAs_AuthenticationTicketRefusedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AuthenticationTicketRefusedMessage(input);
    }

    private deserializeAs_AuthenticationTicketRefusedMessage(input: ICustomDataInput)
    {

    }

}