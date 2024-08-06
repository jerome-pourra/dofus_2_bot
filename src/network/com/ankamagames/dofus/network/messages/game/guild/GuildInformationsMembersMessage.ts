import { GuildMemberInfo } from "./../../../types/game/guild/GuildMemberInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsMembersMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6362;

	public members: Array<GuildMemberInfo>;

    public constructor()
    {
        super();
        this.members = Array<GuildMemberInfo>();
    }

    public getMessageId()
    {
        return GuildInformationsMembersMessage.protocolId;
    }

    public initGuildInformationsMembersMessage(members: Array<GuildMemberInfo> = null): GuildInformationsMembersMessage
    {
        this.members = members;
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
        this.serializeAs_GuildInformationsMembersMessage(output);
    }

    public serializeAs_GuildInformationsMembersMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.members.length);
        for(var _i1: number = 0; _i1 < this.members.length; _i1++)
        {
            (this.members[_i1] as GuildMemberInfo).serializeAs_GuildMemberInfo(output);
        }
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