import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismAddOrUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1525;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public prism: PrismGeolocalizedInformation;

    public constructor()
    {
        super();
        this.prism = new PrismGeolocalizedInformation();
    }

    public getMessageId()
    {
        return PrismAddOrUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PrismAddOrUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PrismAddOrUpdateMessage.endpointServer;
    }

    public initPrismAddOrUpdateMessage(prism: PrismGeolocalizedInformation = null): PrismAddOrUpdateMessage
    {
        this.prism = prism;
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
        this.serializeAs_PrismAddOrUpdateMessage(output);
    }

    public serializeAs_PrismAddOrUpdateMessage(output: ICustomDataOutput)
    {
        this.prism.serializeAs_PrismGeolocalizedInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismAddOrUpdateMessage(input);
    }

    private deserializeAs_PrismAddOrUpdateMessage(input: ICustomDataInput)
    {
        this.prism = new PrismGeolocalizedInformation();
        this.prism.deserialize(input);
    }

}