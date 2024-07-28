import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildCreationValidMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1720;

	public guildName: string = "";
	public guildEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.guildEmblem = new SocialEmblem();
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
        this.deserializeAs_GuildCreationValidMessage(input);
    }

    private deserializeAs_GuildCreationValidMessage(input: ICustomDataInput)
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