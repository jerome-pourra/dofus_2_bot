import { PartyGuestInformations } from "./../../../../../types/game/context/roleplay/party/PartyGuestInformations";
import { PartyInvitationMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyInvitationMemberInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyInvitationDetailsMessage } from "./PartyInvitationDetailsMessage";

export class PartyInvitationDungeonDetailsMessage extends PartyInvitationDetailsMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2367;

	public dungeonId: number = 0;
	public playersDungeonReady: Array<boolean>;

    public constructor()
    {
        super();
        this.playersDungeonReady = Array<boolean>();
    }

    public getMessageId()
    {
        return PartyInvitationDungeonDetailsMessage.protocolId;
    }

    public initPartyInvitationDungeonDetailsMessage(partyId: number = 0, partyType: number = 0, partyName: string = "", fromId: number = 0, fromName: string = "", leaderId: number = 0, members: Array<PartyInvitationMemberInformations> = null, guests: Array<PartyGuestInformations> = null, dungeonId: number = 0, playersDungeonReady: Array<boolean> = null): PartyInvitationDungeonDetailsMessage
    {
        super.initPartyInvitationDetailsMessage(partyId,partyType,partyName,fromId,fromName,leaderId,members,guests);
        this.dungeonId = dungeonId;
        this.playersDungeonReady = playersDungeonReady;
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
        this.serializeAs_PartyInvitationDungeonDetailsMessage(output);
    }

    public serializeAs_PartyInvitationDungeonDetailsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyInvitationDetailsMessage(output);
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
        output.writeShort(this.playersDungeonReady.length);
        for(var _i2: number = 0; _i2 < this.playersDungeonReady.length; _i2++)
        {
            output.writeBoolean(this.playersDungeonReady[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationDungeonDetailsMessage(input);
    }

    private deserializeAs_PartyInvitationDungeonDetailsMessage(input: ICustomDataInput)
    {
        let _val2: boolean = false;
        super.deserialize(input);
        this._dungeonIdFunc(input);
        let _playersDungeonReadyLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _playersDungeonReadyLen; _i2++)
        {
            _val2 = Boolean(input.readBoolean());
            this.playersDungeonReady.push(_val2);
        }
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonDetailsMessage.dungeonId.");
        }
    }

}