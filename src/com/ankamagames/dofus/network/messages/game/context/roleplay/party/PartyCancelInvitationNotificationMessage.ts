import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyCancelInvitationNotificationMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1327;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public cancelerId: number = 0;
	public guestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyCancelInvitationNotificationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyCancelInvitationNotificationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyCancelInvitationNotificationMessage.endpointServer;
    }

    public initPartyCancelInvitationNotificationMessage(partyId: number = 0, cancelerId: number = 0, guestId: number = 0): PartyCancelInvitationNotificationMessage
    {
        super.initAbstractPartyEventMessage(partyId);
        this.cancelerId = cancelerId;
        this.guestId = guestId;
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
        this.serializeAs_PartyCancelInvitationNotificationMessage(output);
    }

    public serializeAs_PartyCancelInvitationNotificationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        if(this.cancelerId < 0 || this.cancelerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.cancelerId + ") on element cancelerId.");
        }
        output.writeVarLong(this.cancelerId);
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        }
        output.writeVarLong(this.guestId);
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