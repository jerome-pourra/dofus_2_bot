import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyRefuseInvitationMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9721;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyRefuseInvitationMessage.protocolId;
    }

    public initPartyRefuseInvitationMessage(partyId: number = 0): PartyRefuseInvitationMessage
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
        this.serializeAs_PartyRefuseInvitationMessage(output);
    }

    public serializeAs_PartyRefuseInvitationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyRefuseInvitationMessage(input);
    }

    private deserializeAs_PartyRefuseInvitationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}