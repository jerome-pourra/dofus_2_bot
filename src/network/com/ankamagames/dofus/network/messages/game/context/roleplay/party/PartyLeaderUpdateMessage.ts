import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyLeaderUpdateMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6439;

	public partyLeaderId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyLeaderUpdateMessage.protocolId;
    }

    public initPartyLeaderUpdateMessage(partyId: number = 0, partyLeaderId: number = 0): PartyLeaderUpdateMessage
    {
        super.initAbstractPartyEventMessage(partyId);
        this.partyLeaderId = partyLeaderId;
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
        this.serializeAs_PartyLeaderUpdateMessage(output);
    }

    public serializeAs_PartyLeaderUpdateMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        if(this.partyLeaderId < 0 || this.partyLeaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.partyLeaderId + ") on element partyLeaderId.");
        }
        output.writeVarLong(this.partyLeaderId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyLeaderUpdateMessage(input);
    }

    private deserializeAs_PartyLeaderUpdateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._partyLeaderIdFunc(input);
    }

    private _partyLeaderIdFunc(input: ICustomDataInput)
    {
        this.partyLeaderId = input.readVarUhLong();
        if(this.partyLeaderId < 0 || this.partyLeaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.partyLeaderId + ") on element of PartyLeaderUpdateMessage.partyLeaderId.");
        }
    }

}