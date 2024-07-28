import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatAbstractClientMessage } from "./ChatAbstractClientMessage";

export class ChatClientMultiMessage extends ChatAbstractClientMessage
{

	public static readonly protocolId: number = 3932;

	public channel: number = 0;

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
        this.deserializeAs_ChatClientMultiMessage(input);
    }

    private deserializeAs_ChatClientMultiMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._channelFunc(input);
    }

    private _channelFunc(input: ICustomDataInput)
    {
        this.channel = input.readByte();
        if(this.channel < 0)
        {
            throw new Error("Forbidden value (" + this.channel + ") on element of ChatClientMultiMessage.channel.");
        }
    }

}