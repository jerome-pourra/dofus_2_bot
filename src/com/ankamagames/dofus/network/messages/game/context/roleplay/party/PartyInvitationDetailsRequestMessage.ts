import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyInvitationDetailsRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8629;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyInvitationDetailsRequestMessage.protocolId;
    }

    public initPartyInvitationDetailsRequestMessage(partyId: number = 0): PartyInvitationDetailsRequestMessage
    {
        super.initAbstractPartyMessage(partyId);
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
        this.serializeAs_PartyInvitationDetailsRequestMessage(output);
    }

    public serializeAs_PartyInvitationDetailsRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationDetailsRequestMessage(input);
    }

    private deserializeAs_PartyInvitationDetailsRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}