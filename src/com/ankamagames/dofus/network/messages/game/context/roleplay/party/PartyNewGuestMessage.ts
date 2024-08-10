import { PartyGuestInformations } from "./../../../../../types/game/context/roleplay/party/PartyGuestInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyEventMessage } from "./AbstractPartyEventMessage";

export class PartyNewGuestMessage extends AbstractPartyEventMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7060;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guest: PartyGuestInformations;

    public constructor()
    {
        super();
        this.guest = new PartyGuestInformations();
    }

    public getMessageId()
    {
        return PartyNewGuestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyNewGuestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyNewGuestMessage.endpointServer;
    }

    public initPartyNewGuestMessage(partyId: number = 0, guest: PartyGuestInformations = null): PartyNewGuestMessage
    {
        super.initAbstractPartyEventMessage(partyId);
        this.guest = guest;
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
        this.serializeAs_PartyNewGuestMessage(output);
    }

    public serializeAs_PartyNewGuestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyEventMessage(output);
        this.guest.serializeAs_PartyGuestInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyNewGuestMessage(input);
    }

    private deserializeAs_PartyNewGuestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guest = new PartyGuestInformations();
        this.guest.deserialize(input);
    }

}