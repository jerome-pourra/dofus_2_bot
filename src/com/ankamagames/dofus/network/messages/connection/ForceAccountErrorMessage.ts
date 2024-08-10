import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ForceAccountErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5352;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ForceAccountErrorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ForceAccountErrorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ForceAccountErrorMessage.endpointServer;
    }

    public initForceAccountErrorMessage(): ForceAccountErrorMessage
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
        this.serializeAs_ForceAccountErrorMessage(output);
    }

    public serializeAs_ForceAccountErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForceAccountErrorMessage(input);
    }

    private deserializeAs_ForceAccountErrorMessage(input: ICustomDataInput)
    {

    }

}