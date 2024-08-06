import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLoyaltyStatusMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5384;

	public loyal: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyLoyaltyStatusMessage.protocolId;
    }

    public initPartyLoyaltyStatusMessage(partyId: number = 0, loyal: boolean = false): PartyLoyaltyStatusMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.loyal = loyal;
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
        this.serializeAs_PartyLoyaltyStatusMessage(output);
    }

    public serializeAs_PartyLoyaltyStatusMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeBoolean(this.loyal);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyLoyaltyStatusMessage(input);
    }

    private deserializeAs_PartyLoyaltyStatusMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._loyalFunc(input);
    }

    private _loyalFunc(input: ICustomDataInput)
    {
        this.loyal = input.readBoolean();
    }

}