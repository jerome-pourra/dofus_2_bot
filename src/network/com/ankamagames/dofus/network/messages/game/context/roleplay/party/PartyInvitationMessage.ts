import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyInvitationMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 729;

	public partyType: number = 0;
	public partyName: string = "";
	public maxParticipants: number = 0;
	public fromId: number = 0;
	public fromName: string = "";
	public toId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyInvitationMessage.protocolId;
    }

    public initPartyInvitationMessage(partyId: number = 0, partyType: number = 0, partyName: string = "", maxParticipants: number = 0, fromId: number = 0, fromName: string = "", toId: number = 0): PartyInvitationMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.partyType = partyType;
        this.partyName = partyName;
        this.maxParticipants = maxParticipants;
        this.fromId = fromId;
        this.fromName = fromName;
        this.toId = toId;
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
        this.serializeAs_PartyInvitationMessage(output);
    }

    public serializeAs_PartyInvitationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeByte(this.partyType);
        output.writeUTF(this.partyName);
        if(this.maxParticipants < 0)
        {
            throw new Error("Forbidden value (" + this.maxParticipants + ") on element maxParticipants.");
        }
        output.writeByte(this.maxParticipants);
        if(this.fromId < 0 || this.fromId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fromId + ") on element fromId.");
        }
        output.writeVarLong(this.fromId);
        output.writeUTF(this.fromName);
        if(this.toId < 0 || this.toId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.toId + ") on element toId.");
        }
        output.writeVarLong(this.toId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationMessage(input);
    }

    private deserializeAs_PartyInvitationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._partyTypeFunc(input);
        this._partyNameFunc(input);
        this._maxParticipantsFunc(input);
        this._fromIdFunc(input);
        this._fromNameFunc(input);
        this._toIdFunc(input);
    }

    private _partyTypeFunc(input: ICustomDataInput)
    {
        this.partyType = input.readByte();
        if(this.partyType < 0)
        {
            throw new Error("Forbidden value (" + this.partyType + ") on element of PartyInvitationMessage.partyType.");
        }
    }

    private _partyNameFunc(input: ICustomDataInput)
    {
        this.partyName = input.readUTF();
    }

    private _maxParticipantsFunc(input: ICustomDataInput)
    {
        this.maxParticipants = input.readByte();
        if(this.maxParticipants < 0)
        {
            throw new Error("Forbidden value (" + this.maxParticipants + ") on element of PartyInvitationMessage.maxParticipants.");
        }
    }

    private _fromIdFunc(input: ICustomDataInput)
    {
        this.fromId = input.readVarUhLong();
        if(this.fromId < 0 || this.fromId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fromId + ") on element of PartyInvitationMessage.fromId.");
        }
    }

    private _fromNameFunc(input: ICustomDataInput)
    {
        this.fromName = input.readUTF();
    }

    private _toIdFunc(input: ICustomDataInput)
    {
        this.toId = input.readVarUhLong();
        if(this.toId < 0 || this.toId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.toId + ") on element of PartyInvitationMessage.toId.");
        }
    }

}