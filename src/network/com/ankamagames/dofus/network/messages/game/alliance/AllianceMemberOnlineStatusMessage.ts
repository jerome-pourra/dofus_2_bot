import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberOnlineStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5529;

	public memberId: number = 0;
	public online: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMemberOnlineStatusMessage.protocolId;
    }

    public initAllianceMemberOnlineStatusMessage(memberId: number = 0, online: boolean = false): AllianceMemberOnlineStatusMessage
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
        this.serializeAs_AllianceMemberOnlineStatusMessage(output);
    }

    public serializeAs_AllianceMemberOnlineStatusMessage(output: ICustomDataOutput)
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
        this.deserializeAs_AllianceMemberOnlineStatusMessage(input);
    }

    private deserializeAs_AllianceMemberOnlineStatusMessage(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._onlineFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of AllianceMemberOnlineStatusMessage.memberId.");
        }
    }

    private _onlineFunc(input: ICustomDataInput)
    {
        this.online = input.readBoolean();
    }

}