import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AuthenticationTicketAcceptedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7505;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AuthenticationTicketAcceptedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AuthenticationTicketAcceptedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AuthenticationTicketAcceptedMessage.endpointServer;
    }

    public initAuthenticationTicketAcceptedMessage(): AuthenticationTicketAcceptedMessage
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
        this.serializeAs_AuthenticationTicketAcceptedMessage(output);
    }

    public serializeAs_AuthenticationTicketAcceptedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AuthenticationTicketAcceptedMessage(input);
    }

    private deserializeAs_AuthenticationTicketAcceptedMessage(input: ICustomDataInput)
    {

    }

}