import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLeaveRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6779;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyLeaveRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyLeaveRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyLeaveRequestMessage.endpointServer;
    }

    public initPartyLeaveRequestMessage(partyId: number = 0): PartyLeaveRequestMessage
    {
        super.initAbstractPartyMessage(partyId);
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
        this.serializeAs_PartyLeaveRequestMessage(output);
    }

    public serializeAs_PartyLeaveRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyLeaveRequestMessage(input);
    }

    private deserializeAs_PartyLeaveRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}