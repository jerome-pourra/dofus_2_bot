import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AuthenticationTicketMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6808;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public lang: string = "";
	public ticket: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AuthenticationTicketMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AuthenticationTicketMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AuthenticationTicketMessage.endpointServer;
    }

    public initAuthenticationTicketMessage(lang: string = "", ticket: string = ""): AuthenticationTicketMessage
    {
        this.lang = lang;
        this.ticket = ticket;
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
        this.serializeAs_AuthenticationTicketMessage(output);
    }

    public serializeAs_AuthenticationTicketMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.lang);
        output.writeUTF(this.ticket);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AuthenticationTicketMessage(input);
    }

    private deserializeAs_AuthenticationTicketMessage(input: ICustomDataInput)
    {
        this._langFunc(input);
        this._ticketFunc(input);
    }

    private _langFunc(input: ICustomDataInput)
    {
        this.lang = input.readUTF();
    }

    private _ticketFunc(input: ICustomDataInput)
    {
        this.ticket = input.readUTF();
    }

}