import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyNameUpdateMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9591;

	public partyName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyNameUpdateMessage.protocolId;
    }

    public initPartyNameUpdateMessage(partyId: number = 0, partyName: string = ""): PartyNameUpdateMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.partyName = partyName;
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
        this.serializeAs_PartyNameUpdateMessage(output);
    }

    public serializeAs_PartyNameUpdateMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeUTF(this.partyName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyNameUpdateMessage(input);
    }

    private deserializeAs_PartyNameUpdateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._partyNameFunc(input);
    }

    private _partyNameFunc(input: ICustomDataInput)
    {
        this.partyName = input.readUTF();
    }

}