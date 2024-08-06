import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyNameSetErrorMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7989;

	public result: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyNameSetErrorMessage.protocolId;
    }

    public initPartyNameSetErrorMessage(partyId: number = 0, result: number = 0): PartyNameSetErrorMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.result = result;
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
        this.serializeAs_PartyNameSetErrorMessage(output);
    }

    public serializeAs_PartyNameSetErrorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyNameSetErrorMessage(input);
    }

    private deserializeAs_PartyNameSetErrorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of PartyNameSetErrorMessage.result.");
        }
    }

}