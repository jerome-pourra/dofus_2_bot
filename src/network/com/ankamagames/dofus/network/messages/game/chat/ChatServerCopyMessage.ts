import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractServerMessage } from "./ChatAbstractServerMessage";

export class ChatServerCopyMessage extends ChatAbstractServerMessage
{

	public static readonly protocolId: number = 8617;

	public receiverId: number = 0;
	public receiverName: string = "";

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
        this.deserializeAs_ChatServerCopyMessage(input);
    }

    private deserializeAs_ChatServerCopyMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._receiverIdFunc(input);
        this._receiverNameFunc(input);
    }

    private _receiverIdFunc(input: ICustomDataInput)
    {
        this.receiverId = input.readVarUhLong();
        if(this.receiverId < 0 || this.receiverId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.receiverId + ") on element of ChatServerCopyMessage.receiverId.");
        }
    }

    private _receiverNameFunc(input: ICustomDataInput)
    {
        this.receiverName = input.readUTF();
    }

}