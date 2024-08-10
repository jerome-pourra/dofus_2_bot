import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceCreationStartedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6534;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceCreationStartedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceCreationStartedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceCreationStartedMessage.endpointServer;
    }

    public initAllianceCreationStartedMessage(): AllianceCreationStartedMessage
    {
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
        this.serializeAs_AllianceCreationStartedMessage(output);
    }

    public serializeAs_AllianceCreationStartedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceCreationStartedMessage(input);
    }

    private deserializeAs_AllianceCreationStartedMessage(input: ICustomDataInput)
    {

    }

}