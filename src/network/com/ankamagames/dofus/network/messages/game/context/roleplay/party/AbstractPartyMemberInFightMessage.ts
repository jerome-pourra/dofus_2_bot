import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class AbstractPartyMemberInFightMessage extends AbstractPartyMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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