import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FinishMoveListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2859;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FinishMoveListRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FinishMoveListRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FinishMoveListRequestMessage.endpointServer;
    }

    public initFinishMoveListRequestMessage(): FinishMoveListRequestMessage
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
        this.serializeAs_FinishMoveListRequestMessage(output);
    }

    public serializeAs_FinishMoveListRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FinishMoveListRequestMessage(input);
    }

    private deserializeAs_FinishMoveListRequestMessage(input: ICustomDataInput)
    {

    }

}