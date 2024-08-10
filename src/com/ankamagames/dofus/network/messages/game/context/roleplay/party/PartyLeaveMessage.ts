import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyLeaveMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 83;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyLeaveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyLeaveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyLeaveMessage.endpointServer;
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
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
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