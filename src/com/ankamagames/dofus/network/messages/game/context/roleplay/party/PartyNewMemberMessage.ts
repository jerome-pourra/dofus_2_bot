import { PartyMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyMemberInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyUpdateMessage } from "./PartyUpdateMessage";

export class PartyNewMemberMessage extends PartyUpdateMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4529;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyNewMemberMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyNewMemberMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyNewMemberMessage.endpointServer;
    }

    public initPartyNewMemberMessage(partyId: number = 0, memberInformations: PartyMemberInformations = null): PartyNewMemberMessage
    {
        super.initPartyUpdateMessage(partyId,memberInformations);
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
        this.serializeAs_PartyNewMemberMessage(output);
    }

    public serializeAs_PartyNewMemberMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PartyUpdateMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyNewMemberMessage(input);
    }

    private deserializeAs_PartyNewMemberMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}