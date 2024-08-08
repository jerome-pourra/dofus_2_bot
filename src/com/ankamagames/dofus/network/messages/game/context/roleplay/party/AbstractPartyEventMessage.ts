import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class AbstractPartyEventMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5451;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AbstractPartyEventMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AbstractPartyEventMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AbstractPartyEventMessage.endpointServer;
    }

    public initAbstractPartyEventMessage(partyId: number = 0): AbstractPartyEventMessage
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
        this.serializeAs_AbstractPartyEventMessage(output);
    }

    public serializeAs_AbstractPartyEventMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractPartyEventMessage(input);
    }

    private deserializeAs_AbstractPartyEventMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}