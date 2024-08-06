import { PartyMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyMemberInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyUpdateMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5707;

	public memberInformations: PartyMemberInformations;

    public constructor()
    {
        super();
        this.memberInformations = new PartyMemberInformations();
    }

    public getMessageId()
    {
        return PartyUpdateMessage.protocolId;
    }

    public initPartyUpdateMessage(partyId: number = 0, memberInformations: PartyMemberInformations = null): PartyUpdateMessage
    {
        super.initAbstractPartyEventMessage(partyId);
        this.memberInformations = memberInformations;
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
        this.serializeAs_PartyUpdateMessage(output);
    }

    public serializeAs_PartyUpdateMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        output.writeShort(this.memberInformations.getTypeId());
        this.memberInformations.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyUpdateMessage(input);
    }

    private deserializeAs_PartyUpdateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.memberInformations = ProtocolTypeManager.getInstance(PartyMemberInformations,_id1);
        this.memberInformations.deserialize(input);
    }

}