import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyCancelInvitationMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 425;

	public guestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyCancelInvitationMessage.protocolId;
    }

    public initPartyCancelInvitationMessage(partyId: number = 0, guestId: number = 0): PartyCancelInvitationMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.guestId = guestId;
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
        this.serializeAs_PartyCancelInvitationMessage(output);
    }

    public serializeAs_PartyCancelInvitationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        }
        output.writeVarLong(this.guestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyCancelInvitationMessage(input);
    }

    private deserializeAs_PartyCancelInvitationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._guestIdFunc(input);
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of PartyCancelInvitationMessage.guestId.");
        }
    }

}