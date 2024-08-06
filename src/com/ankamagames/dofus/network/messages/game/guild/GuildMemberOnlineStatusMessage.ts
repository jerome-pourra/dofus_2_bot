import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildMemberOnlineStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8750;

	public memberId: number = 0;
	public online: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMemberOnlineStatusMessage.protocolId;
    }

    public initGuildMemberOnlineStatusMessage(memberId: number = 0, online: boolean = false): GuildMemberOnlineStatusMessage
    {
        this.memberId = memberId;
        this.online = online;
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
        this.serializeAs_GuildMemberOnlineStatusMessage(output);
    }

    public serializeAs_GuildMemberOnlineStatusMessage(output: ICustomDataOutput)
    {
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        output.writeBoolean(this.online);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMemberOnlineStatusMessage(input);
    }

    private deserializeAs_GuildMemberOnlineStatusMessage(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._onlineFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of GuildMemberOnlineStatusMessage.memberId.");
        }
    }

    private _onlineFunc(input: ICustomDataInput)
    {
        this.online = input.readBoolean();
    }

}