import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyInvitationCancelledForGuestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7618;

	public cancelerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyInvitationCancelledForGuestMessage.protocolId;
    }

    public initPartyInvitationCancelledForGuestMessage(partyId: number = 0, cancelerId: number = 0): PartyInvitationCancelledForGuestMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.cancelerId = cancelerId;
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
        this.serializeAs_PartyInvitationCancelledForGuestMessage(output);
    }

    public serializeAs_PartyInvitationCancelledForGuestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        if(this.cancelerId < 0 || this.cancelerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.cancelerId + ") on element cancelerId.");
        }
        output.writeVarLong(this.cancelerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationCancelledForGuestMessage(input);
    }

    private deserializeAs_PartyInvitationCancelledForGuestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._cancelerIdFunc(input);
    }

    private _cancelerIdFunc(input: ICustomDataInput)
    {
        this.cancelerId = input.readVarUhLong();
        if(this.cancelerId < 0 || this.cancelerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.cancelerId + ") on element of PartyInvitationCancelledForGuestMessage.cancelerId.");
        }
    }

}