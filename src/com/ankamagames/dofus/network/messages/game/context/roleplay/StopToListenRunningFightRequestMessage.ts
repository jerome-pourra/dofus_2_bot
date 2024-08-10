import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StopToListenRunningFightRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3109;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StopToListenRunningFightRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StopToListenRunningFightRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StopToListenRunningFightRequestMessage.endpointServer;
    }

    public initStopToListenRunningFightRequestMessage(): StopToListenRunningFightRequestMessage
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
        this.serializeAs_StopToListenRunningFightRequestMessage(output);
    }

    public serializeAs_StopToListenRunningFightRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StopToListenRunningFightRequestMessage(input);
    }

    private deserializeAs_StopToListenRunningFightRequestMessage(input: ICustomDataInput)
    {

    }

}