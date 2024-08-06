import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class AbstractPartyMemberInFightMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6938;

	public reason: number = 0;
	public memberId: number = 0;
	public memberAccountId: number = 0;
	public memberName: string = "";
	public fightId: number = 0;
	public timeBeforeFightStart: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AbstractPartyMemberInFightMessage.protocolId;
    }

    public initAbstractPartyMemberInFightMessage(partyId: number = 0, reason: number = 0, memberId: number = 0, memberAccountId: number = 0, memberName: string = "", fightId: number = 0, timeBeforeFightStart: number = 0): AbstractPartyMemberInFightMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.reason = reason;
        this.memberId = memberId;
        this.memberAccountId = memberAccountId;
        this.memberName = memberName;
        this.fightId = fightId;
        this.timeBeforeFightStart = timeBeforeFightStart;
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
        this.serializeAs_AbstractPartyMemberInFightMessage(output);
    }

    public serializeAs_AbstractPartyMemberInFightMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeByte(this.reason);
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        if(this.memberAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.memberAccountId + ") on element memberAccountId.");
        }
        output.writeInt(this.memberAccountId);
        output.writeUTF(this.memberName);
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeVarShort(this.timeBeforeFightStart);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractPartyMemberInFightMessage(input);
    }

    private deserializeAs_AbstractPartyMemberInFightMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._reasonFunc(input);
        this._memberIdFunc(input);
        this._memberAccountIdFunc(input);
        this._memberNameFunc(input);
        this._fightIdFunc(input);
        this._timeBeforeFightStartFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of AbstractPartyMemberInFightMessage.reason.");
        }
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of AbstractPartyMemberInFightMessage.memberId.");
        }
    }

    private _memberAccountIdFunc(input: ICustomDataInput)
    {
        this.memberAccountId = input.readInt();
        if(this.memberAccountId < 0)
        {
            throw new Error("Forbidden value (" + this.memberAccountId + ") on element of AbstractPartyMemberInFightMessage.memberAccountId.");
        }
    }

    private _memberNameFunc(input: ICustomDataInput)
    {
        this.memberName = input.readUTF();
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of AbstractPartyMemberInFightMessage.fightId.");
        }
    }

    private _timeBeforeFightStartFunc(input: ICustomDataInput)
    {
        this.timeBeforeFightStart = input.readVarShort();
    }

}