import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class StopListenTaxCollectorPresetsUpdatesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4043;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StopListenTaxCollectorPresetsUpdatesMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StopListenTaxCollectorPresetsUpdatesMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StopListenTaxCollectorPresetsUpdatesMessage.endpointServer;
    }

    public initStopListenTaxCollectorPresetsUpdatesMessage(): StopListenTaxCollectorPresetsUpdatesMessage
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
        this.serializeAs_StopListenTaxCollectorPresetsUpdatesMessage(output);
    }

    public serializeAs_StopListenTaxCollectorPresetsUpdatesMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StopListenTaxCollectorPresetsUpdatesMessage(input);
    }

    private deserializeAs_StopListenTaxCollectorPresetsUpdatesMessage(input: ICustomDataInput)
    {

    }

}