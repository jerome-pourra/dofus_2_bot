import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyModifiableStatusMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2363;

	public enabled: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyModifiableStatusMessage.protocolId;
    }

    public initPartyModifiableStatusMessage(partyId: number = 0, enabled: boolean = false): PartyModifiableStatusMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.enabled = enabled;
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
        this.serializeAs_PartyModifiableStatusMessage(output);
    }

    public serializeAs_PartyModifiableStatusMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeBoolean(this.enabled);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyModifiableStatusMessage(input);
    }

    private deserializeAs_PartyModifiableStatusMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._enabledFunc(input);
    }

    private _enabledFunc(input: ICustomDataInput)
    {
        this.enabled = input.readBoolean();
    }

}