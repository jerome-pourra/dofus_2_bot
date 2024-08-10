import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextDestroyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1821;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameContextDestroyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextDestroyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextDestroyMessage.endpointServer;
    }

    public initGameContextDestroyMessage(): GameContextDestroyMessage
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
        this.serializeAs_GameContextDestroyMessage(output);
    }

    public serializeAs_GameContextDestroyMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextDestroyMessage(input);
    }

    private deserializeAs_GameContextDestroyMessage(input: ICustomDataInput)
    {

    }

}