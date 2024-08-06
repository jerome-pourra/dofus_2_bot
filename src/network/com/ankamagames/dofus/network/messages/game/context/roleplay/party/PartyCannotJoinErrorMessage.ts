import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyCannotJoinErrorMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6016;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyCannotJoinErrorMessage.protocolId;
    }

    public initPartyCannotJoinErrorMessage(partyId: number = 0, reason: number = 0): PartyCannotJoinErrorMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.reason = reason;
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
        this.serializeAs_PartyCannotJoinErrorMessage(output);
    }

    public serializeAs_PartyCannotJoinErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyCannotJoinErrorMessage(input);
    }

    private deserializeAs_PartyCannotJoinErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of PartyCannotJoinErrorMessage.reason.");
        }
    }

}