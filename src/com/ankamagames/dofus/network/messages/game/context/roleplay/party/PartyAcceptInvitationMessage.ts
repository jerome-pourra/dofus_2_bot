import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyAcceptInvitationMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4342;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyAcceptInvitationMessage.protocolId;
    }

    public initPartyAcceptInvitationMessage(partyId: number = 0): PartyAcceptInvitationMessage
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
        this.serializeAs_PartyAcceptInvitationMessage(output);
    }

    public serializeAs_PartyAcceptInvitationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyAcceptInvitationMessage(input);
    }

    private deserializeAs_PartyAcceptInvitationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}