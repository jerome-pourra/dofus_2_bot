import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyDeletedMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8038;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyDeletedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyDeletedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyDeletedMessage.endpointServer;
    }

    public initPartyDeletedMessage(partyId: number = 0): PartyDeletedMessage
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
        this.serializeAs_PartyDeletedMessage(output);
    }

    public serializeAs_PartyDeletedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyDeletedMessage(input);
    }

    private deserializeAs_PartyDeletedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}