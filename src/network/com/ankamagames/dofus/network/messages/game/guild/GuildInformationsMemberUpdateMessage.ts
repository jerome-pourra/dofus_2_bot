import { GuildMemberInfo } from "./../../../types/game/guild/GuildMemberInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsMemberUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6708;

	public member: GuildMemberInfo;

    public constructor()
    {
        super();
        this.member = new GuildMemberInfo();
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
        this.deserializeAs_GuildInformationsMemberUpdateMessage(input);
    }

    private deserializeAs_GuildInformationsMemberUpdateMessage(input: ICustomDataInput)
    {
        this.member = new GuildMemberInfo();
        this.member.deserialize(input);
    }

}