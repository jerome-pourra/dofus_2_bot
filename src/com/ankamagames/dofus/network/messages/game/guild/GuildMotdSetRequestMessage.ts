import { SocialNoticeSetRequestMessage } from "./../social/SocialNoticeSetRequestMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildMotdSetRequestMessage extends SocialNoticeSetRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3388;

	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMotdSetRequestMessage.protocolId;
    }

    public initGuildMotdSetRequestMessage(content: string = ""): GuildMotdSetRequestMessage
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
        this.serializeAs_GuildMotdSetRequestMessage(output);
    }

    public serializeAs_GuildMotdSetRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeSetRequestMessage(output);
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMotdSetRequestMessage(input);
    }

    private deserializeAs_GuildMotdSetRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}