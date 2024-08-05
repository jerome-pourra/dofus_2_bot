import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AuthenticationTicketMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6808;

	public lang: string = "";
	public ticket: string = "";

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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