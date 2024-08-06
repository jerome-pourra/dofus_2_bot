import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ChatAbstractClientMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6914;

	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatAbstractClientMessage.protocolId;
    }

    public initChatAbstractClientMessage(content: string = ""): ChatAbstractClientMessage
    {
        this.content = content;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChatAbstractClientMessage(output);
    }

    public serializeAs_ChatAbstractClientMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatAbstractClientMessage(input);
    }

    private deserializeAs_ChatAbstractClientMessage(input: ICustomDataInput)
    {
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}