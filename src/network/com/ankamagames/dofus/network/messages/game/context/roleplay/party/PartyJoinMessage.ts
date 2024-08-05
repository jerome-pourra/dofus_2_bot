import { PartyGuestInformations } from "./../../../../../types/game/context/roleplay/party/PartyGuestInformations";
import { PartyMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyMemberInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyJoinMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 6577;

	public partyType: number = 0;
	public partyLeaderId: number = 0;
	public maxParticipants: number = 0;
	public members: Array<PartyMemberInformations>;
	public guests: Array<PartyGuestInformations>;
	public restricted: boolean = false;
	public partyName: string = "";

    public constructor()
    {
        super();
        this.members = Array<PartyMemberInformations>();
        this.guests = Array<PartyGuestInformations>();
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
        this.deserializeAs_PartyJoinMessage(input);
    }

    private deserializeAs_PartyJoinMessage(input: ICustomDataInput)
    {
        let _id4: number = 0;
        let _item4: PartyMemberInformations;
        let _item5: PartyGuestInformations;
        super.deserialize(input);
        this._partyTypeFunc(input);
        this._partyLeaderIdFunc(input);
        this._maxParticipantsFunc(input);
        let _membersLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _membersLen; _i4++)
        {
            _id4 = input.readUnsignedShort();
            _item4 = ProtocolTypeManager.getInstance(PartyMemberInformations,_id4);
            _item4.deserialize(input);
            this.members.push(_item4);
        }
        let _guestsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _guestsLen; _i5++)
        {
            _item5 = new PartyGuestInformations();
            _item5.deserialize(input);
            this.guests.push(_item5);
        }
        this._restrictedFunc(input);
        this._partyNameFunc(input);
    }

    private _partyTypeFunc(input: ICustomDataInput)
    {
        this.partyType = input.readByte();
        if(this.partyType < 0)
        {
            throw new Error("Forbidden value (" + this.partyType + ") on element of PartyJoinMessage.partyType.");
        }
    }

    private _partyLeaderIdFunc(input: ICustomDataInput)
    {
        this.partyLeaderId = input.readVarUhLong();
        if(this.partyLeaderId < 0 || this.partyLeaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.partyLeaderId + ") on element of PartyJoinMessage.partyLeaderId.");
        }
    }

    private _maxParticipantsFunc(input: ICustomDataInput)
    {
        this.maxParticipants = input.readByte();
        if(this.maxParticipants < 0)
        {
            throw new Error("Forbidden value (" + this.maxParticipants + ") on element of PartyJoinMessage.maxParticipants.");
        }
    }

    private _restrictedFunc(input: ICustomDataInput)
    {
        this.restricted = input.readBoolean();
    }

    private _partyNameFunc(input: ICustomDataInput)
    {
        this.partyName = input.readUTF();
    }

}