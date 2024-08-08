import { AbstractPlayerSearchInformation } from "./../../../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PartyInvitationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7920;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public target: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return PartyInvitationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyInvitationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyInvitationRequestMessage.endpointServer;
    }

    public initPartyInvitationRequestMessage(target: AbstractPlayerSearchInformation = null): PartyInvitationRequestMessage
    {
        this.target = target;
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
        this.serializeAs_PartyInvitationRequestMessage(output);
    }

    public serializeAs_PartyInvitationRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.target.getTypeId());
        this.target.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationRequestMessage(input);
    }

    private deserializeAs_PartyInvitationRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.target.deserialize(input);
    }

}