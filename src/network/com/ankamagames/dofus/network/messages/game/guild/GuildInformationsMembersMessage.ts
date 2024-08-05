import { GuildMemberInfo } from "./../../../types/game/guild/GuildMemberInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsMembersMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6362;

	public members: Array<GuildMemberInfo>;

    public constructor()
    {
        super();
        this.members = Array<GuildMemberInfo>();
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
        this.deserializeAs_GuildInformationsMembersMessage(input);
    }

    private deserializeAs_GuildInformationsMembersMessage(input: ICustomDataInput)
    {
        let _item1: GuildMemberInfo;
        let _membersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _membersLen; _i1++)
        {
            _item1 = new GuildMemberInfo();
            _item1.deserialize(input);
            this.members.push(_item1);
        }
    }

}