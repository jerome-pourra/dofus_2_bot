import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StopListenAllianceFightMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6339;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StopListenAllianceFightMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StopListenAllianceFightMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StopListenAllianceFightMessage.endpointServer;
    }

    public initStopListenAllianceFightMessage(): StopListenAllianceFightMessage
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
        this.serializeAs_StopListenAllianceFightMessage(output);
    }

    public serializeAs_StopListenAllianceFightMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StopListenAllianceFightMessage(input);
    }

    private deserializeAs_StopListenAllianceFightMessage(input: ICustomDataInput)
    {

    }

}