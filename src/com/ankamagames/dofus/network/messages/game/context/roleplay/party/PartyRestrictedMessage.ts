import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyRestrictedMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2879;

	public restricted: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyRestrictedMessage.protocolId;
    }

    public initPartyRestrictedMessage(partyId: number = 0, restricted: boolean = false): PartyRestrictedMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.restricted = restricted;
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
        this.serializeAs_PartyRestrictedMessage(output);
    }

    public serializeAs_PartyRestrictedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeBoolean(this.restricted);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyRestrictedMessage(input);
    }

    private deserializeAs_PartyRestrictedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._restrictedFunc(input);
    }

    private _restrictedFunc(input: ICustomDataInput)
    {
        this.restricted = input.readBoolean();
    }

}