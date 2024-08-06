import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLeaveMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 83;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyLeaveMessage.protocolId;
    }

    public initPartyLeaveMessage(partyId: number = 0): PartyLeaveMessage
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
        this.serializeAs_PartyLeaveMessage(output);
    }

    public serializeAs_PartyLeaveMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyLeaveMessage(input);
    }

    private deserializeAs_PartyLeaveMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}