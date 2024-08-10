import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyRefuseInvitationNotificationMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1724;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyRefuseInvitationNotificationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyRefuseInvitationNotificationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyRefuseInvitationNotificationMessage.endpointServer;
    }

    public initPartyRefuseInvitationNotificationMessage(partyId: number = 0, guestId: number = 0): PartyRefuseInvitationNotificationMessage
    {
        super.initAbstractPartyEventMessage(partyId);
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
        this.serializeAs_PartyRefuseInvitationNotificationMessage(output);
    }

    public serializeAs_PartyRefuseInvitationNotificationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        }
        output.writeVarLong(this.guestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyRefuseInvitationNotificationMessage(input);
    }

    private deserializeAs_PartyRefuseInvitationNotificationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._guestIdFunc(input);
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of PartyRefuseInvitationNotificationMessage.guestId.");
        }
    }

}