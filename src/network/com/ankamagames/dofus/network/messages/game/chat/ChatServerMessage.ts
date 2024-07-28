import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractServerMessage } from "./ChatAbstractServerMessage";

export class ChatServerMessage extends ChatAbstractServerMessage
{

	public static readonly protocolId: number = 6772;

	public senderId: number = 0;
	public senderName: string = "";
	public prefix: string = "";
	public senderAccountId: number = 0;

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
        this.deserializeAs_ChatServerMessage(input);
    }

    private deserializeAs_ChatServerMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._senderIdFunc(input);
        this._senderNameFunc(input);
        this._prefixFunc(input);
        this._senderAccountIdFunc(input);
    }

    private _senderIdFunc(input: ICustomDataInput)
    {
        this.senderId = input.readDouble();
        if(this.senderId < -9007199254740992 || this.senderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.senderId + ") on element of ChatServerMessage.senderId.");
        }
    }

    private _senderNameFunc(input: ICustomDataInput)
    {
        this.senderName = input.readUTF();
    }

    private _prefixFunc(input: ICustomDataInput)
    {
        this.prefix = input.readUTF();
    }

    private _senderAccountIdFunc(input: ICustomDataInput)
    {
        this.senderAccountId = input.readInt();
        if(this.senderAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.senderAccountId + ") on element of ChatServerMessage.senderAccountId.");
        }
    }

}