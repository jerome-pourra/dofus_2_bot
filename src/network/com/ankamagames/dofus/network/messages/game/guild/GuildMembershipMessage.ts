import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GuildJoinedMessage } from "./GuildJoinedMessage";

export class GuildMembershipMessage extends GuildJoinedMessage
{

	public static readonly protocolId: number = 2644;

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
        this.deserializeAs_GuildMembershipMessage(input);
    }

    private deserializeAs_GuildMembershipMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}