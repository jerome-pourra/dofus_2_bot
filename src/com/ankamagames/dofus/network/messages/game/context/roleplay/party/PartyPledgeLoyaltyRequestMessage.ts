import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyPledgeLoyaltyRequestMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7730;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public loyal: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyPledgeLoyaltyRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyPledgeLoyaltyRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyPledgeLoyaltyRequestMessage.endpointServer;
    }

    public initPartyPledgeLoyaltyRequestMessage(partyId: number = 0, loyal: boolean = false): PartyPledgeLoyaltyRequestMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.loyal = loyal;
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
        this.serializeAs_PartyPledgeLoyaltyRequestMessage(output);
    }

    public serializeAs_PartyPledgeLoyaltyRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        output.writeBoolean(this.loyal);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyPledgeLoyaltyRequestMessage(input);
    }

    private deserializeAs_PartyPledgeLoyaltyRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._loyalFunc(input);
    }

    private _loyalFunc(input: ICustomDataInput)
    {
        this.loyal = input.readBoolean();
    }

}