import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyCancelInvitationNotificationMessage extends AbstractPartyEventMessage
{

	public static readonly protocolId: number = 1327;

	public cancelerId: number = 0;
	public guestId: number = 0;

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
        this.deserializeAs_PartyCancelInvitationNotificationMessage(input);
    }

    private deserializeAs_PartyCancelInvitationNotificationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._cancelerIdFunc(input);
        this._guestIdFunc(input);
    }

    private _cancelerIdFunc(input: ICustomDataInput)
    {
        this.cancelerId = input.readVarUhLong();
        if(this.cancelerId < 0 || this.cancelerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.cancelerId + ") on element of PartyCancelInvitationNotificationMessage.cancelerId.");
        }
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of PartyCancelInvitationNotificationMessage.guestId.");
        }
    }

}