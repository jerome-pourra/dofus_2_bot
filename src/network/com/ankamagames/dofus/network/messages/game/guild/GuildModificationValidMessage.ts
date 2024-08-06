import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildModificationValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4686;

	public guildName: string = "";
	public guildEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.guildEmblem = new SocialEmblem();
    }

    public getMessageId()
    {
        return GuildModificationValidMessage.protocolId;
    }

    public initGuildModificationValidMessage(guildName: string = "", guildEmblem: SocialEmblem = null): GuildModificationValidMessage
    {
        this.guildName = guildName;
        this.guildEmblem = guildEmblem;
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
        this.serializeAs_GuildModificationValidMessage(output);
    }

    public serializeAs_GuildModificationValidMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.guildName);
        this.guildEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildModificationValidMessage(input);
    }

    private deserializeAs_GuildModificationValidMessage(input: ICustomDataInput)
    {
        this._guildNameFunc(input);
        this.guildEmblem = new SocialEmblem();
        this.guildEmblem.deserialize(input);
    }

    private _guildNameFunc(input: ICustomDataInput)
    {
        this.guildName = input.readUTF();
    }

}