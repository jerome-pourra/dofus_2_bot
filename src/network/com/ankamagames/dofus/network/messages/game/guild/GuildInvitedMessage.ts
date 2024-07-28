import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInvitedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4003;

	public recruterName: string = "";
	public guildInfo: GuildInformations;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
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
        this.deserializeAs_GuildInvitedMessage(input);
    }

    private deserializeAs_GuildInvitedMessage(input: ICustomDataInput)
    {
        this._recruterNameFunc(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
    }

    private _recruterNameFunc(input: ICustomDataInput)
    {
        this.recruterName = input.readUTF();
    }

}