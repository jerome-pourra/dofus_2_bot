import { AbstractPlayerSearchInformation } from "./../../../../../types/common/AbstractPlayerSearchInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyInvitationRequestMessage } from "./PartyInvitationRequestMessage";

export class PartyInvitationArenaRequestMessage extends PartyInvitationRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2774;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyInvitationArenaRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyInvitationArenaRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyInvitationArenaRequestMessage.endpointServer;
    }

    public initPartyInvitationArenaRequestMessage(target: AbstractPlayerSearchInformation = null): PartyInvitationArenaRequestMessage
    {
        super.initPartyInvitationRequestMessage(target);
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
        this.serializeAs_PartyInvitationArenaRequestMessage(output);
    }

    public serializeAs_PartyInvitationArenaRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyInvitationRequestMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationArenaRequestMessage(input);
    }

    private deserializeAs_PartyInvitationArenaRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}