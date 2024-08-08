import { PartyGuestInformations } from "./../../../../../types/game/context/roleplay/party/PartyGuestInformations";
import { PartyInvitationMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyInvitationMemberInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyInvitationDetailsMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8607;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public partyType: number = 0;
	public partyName: string = "";
	public fromId: number = 0;
	public fromName: string = "";
	public leaderId: number = 0;
	public members: Array<PartyInvitationMemberInformations>;
	public guests: Array<PartyGuestInformations>;

    public constructor()
    {
        super();
        this.members = Array<PartyInvitationMemberInformations>();
        this.guests = Array<PartyGuestInformations>();
    }

    public getMessageId()
    {
        return PartyInvitationDetailsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyInvitationDetailsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyInvitationDetailsMessage.endpointServer;
    }

    public initPartyInvitationDetailsMessage(partyId: number = 0, partyType: number = 0, partyName: string = "", fromId: number = 0, fromName: string = "", leaderId: number = 0, members: Array<PartyInvitationMemberInformations> = null, guests: Array<PartyGuestInformations> = null): PartyInvitationDetailsMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.partyType = partyType;
        this.partyName = partyName;
        this.fromId = fromId;
        this.fromName = fromName;
        this.leaderId = leaderId;
        this.members = members;
        this.guests = guests;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyInvitationDetailsMessage(output);
    }

    public serializeAs_PartyInvitationDetailsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeByte(this.partyType);
        output.writeUTF(this.partyName);
        if(this.fromId < 0 || this.fromId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fromId + ") on element fromId.");
        }
        output.writeVarLong(this.fromId);
        output.writeUTF(this.fromName);
        if(this.leaderId < 0 || this.leaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderId + ") on element leaderId.");
        }
        output.writeVarLong(this.leaderId);
        output.writeShort(this.members.length);
        for(var _i6: number = 0; _i6 < this.members.length; _i6++)
        {
            output.writeShort((this.members[_i6] as PartyInvitationMemberInformations).getTypeId());
            (this.members[_i6] as PartyInvitationMemberInformations).serialize(output);
        }
        output.writeShort(this.guests.length);
        for(var _i7: number = 0; _i7 < this.guests.length; _i7++)
        {
            (this.guests[_i7] as PartyGuestInformations).serializeAs_PartyGuestInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationDetailsMessage(input);
    }

    private deserializeAs_PartyInvitationDetailsMessage(input: ICustomDataInput)
    {
        let _id6: number = 0;
        let _item6: PartyInvitationMemberInformations;
        let _item7: PartyGuestInformations;
        super.deserialize(input);
        this._partyTypeFunc(input);
        this._partyNameFunc(input);
        this._fromIdFunc(input);
        this._fromNameFunc(input);
        this._leaderIdFunc(input);
        let _membersLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _membersLen; _i6++)
        {
            _id6 = input.readUnsignedShort();
            _item6 = ProtocolTypeManager.getInstance(PartyInvitationMemberInformations,_id6);
            _item6.deserialize(input);
            this.members.push(_item6);
        }
        let _guestsLen: number = input.readUnsignedShort();
        for(let _i7: number = 0; _i7 < _guestsLen; _i7++)
        {
            _item7 = new PartyGuestInformations();
            _item7.deserialize(input);
            this.guests.push(_item7);
        }
    }

    private _partyTypeFunc(input: ICustomDataInput)
    {
        this.partyType = input.readByte();
        if(this.partyType < 0)
        {
            throw new Error("Forbidden value (" + this.partyType + ") on element of PartyInvitationDetailsMessage.partyType.");
        }
    }

    private _partyNameFunc(input: ICustomDataInput)
    {
        this.partyName = input.readUTF();
    }

    private _fromIdFunc(input: ICustomDataInput)
    {
        this.fromId = input.readVarUhLong();
        if(this.fromId < 0 || this.fromId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fromId + ") on element of PartyInvitationDetailsMessage.fromId.");
        }
    }

    private _fromNameFunc(input: ICustomDataInput)
    {
        this.fromName = input.readUTF();
    }

    private _leaderIdFunc(input: ICustomDataInput)
    {
        this.leaderId = input.readVarUhLong();
        if(this.leaderId < 0 || this.leaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderId + ") on element of PartyInvitationDetailsMessage.leaderId.");
        }
    }

}