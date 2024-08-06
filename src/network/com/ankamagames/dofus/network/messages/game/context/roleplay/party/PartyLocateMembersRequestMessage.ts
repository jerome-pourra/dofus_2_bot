import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLocateMembersRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4987;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyLocateMembersRequestMessage.protocolId;
    }

    public initPartyLocateMembersRequestMessage(partyId: number = 0): PartyLocateMembersRequestMessage
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
        this.serializeAs_PartyLocateMembersRequestMessage(output);
    }

    public serializeAs_PartyLocateMembersRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyLocateMembersRequestMessage(input);
    }

    private deserializeAs_PartyLocateMembersRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}