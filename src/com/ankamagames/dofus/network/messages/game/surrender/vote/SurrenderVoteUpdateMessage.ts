import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6154;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SurrenderVoteUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SurrenderVoteUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SurrenderVoteUpdateMessage.endpointServer;
    }

    public initSurrenderVoteUpdateMessage(): SurrenderVoteUpdateMessage
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
        this.serializeAs_SurrenderVoteUpdateMessage(output);
    }

    public serializeAs_SurrenderVoteUpdateMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteUpdateMessage(input);
    }

    private deserializeAs_SurrenderVoteUpdateMessage(input: ICustomDataInput)
    {

    }

}