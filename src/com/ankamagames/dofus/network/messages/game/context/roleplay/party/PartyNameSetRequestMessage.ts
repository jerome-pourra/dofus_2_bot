import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyNameSetRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9125;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public partyName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyNameSetRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyNameSetRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyNameSetRequestMessage.endpointServer;
    }

    public initPartyNameSetRequestMessage(partyId: number = 0, partyName: string = ""): PartyNameSetRequestMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.partyName = partyName;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyNameSetRequestMessage(output);
    }

    public serializeAs_PartyNameSetRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeUTF(this.partyName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyNameSetRequestMessage(input);
    }

    private deserializeAs_PartyNameSetRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._partyNameFunc(input);
    }

    private _partyNameFunc(input: ICustomDataInput)
    {
        this.partyName = input.readUTF();
    }

}