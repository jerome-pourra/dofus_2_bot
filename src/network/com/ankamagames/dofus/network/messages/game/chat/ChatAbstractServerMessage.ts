import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ChatAbstractServerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1770;

	public channel: number = 0;
	public content: string = "";
	public timestamp: number = 0;
	public fingerprint: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatAbstractServerMessage.protocolId;
    }

    public initChatAbstractServerMessage(channel: number = 0, content: string = "", timestamp: number = 0, fingerprint: string = ""): ChatAbstractServerMessage
    {
        this.channel = channel;
        this.content = content;
        this.timestamp = timestamp;
        this.fingerprint = fingerprint;
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
        this.serializeAs_ChatAbstractServerMessage(output);
    }

    public serializeAs_ChatAbstractServerMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.channel);
        output.writeUTF(this.content);
        if(this.timestamp < 0)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
        }
        output.writeInt(this.timestamp);
        output.writeUTF(this.fingerprint);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatAbstractServerMessage(input);
    }

    private deserializeAs_ChatAbstractServerMessage(input: ICustomDataInput)
    {
        this._channelFunc(input);
        this._contentFunc(input);
        this._timestampFunc(input);
        this._fingerprintFunc(input);
    }

    private _channelFunc(input: ICustomDataInput)
    {
        this.channel = input.readByte();
        if(this.channel < 0)
        {
            throw new Error("Forbidden value (" + this.channel + ") on element of ChatAbstractServerMessage.channel.");
        }
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

    private _timestampFunc(input: ICustomDataInput)
    {
        this.timestamp = input.readInt();
        if(this.timestamp < 0)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element of ChatAbstractServerMessage.timestamp.");
        }
    }

    private _fingerprintFunc(input: ICustomDataInput)
    {
        this.fingerprint = input.readUTF();
    }

}