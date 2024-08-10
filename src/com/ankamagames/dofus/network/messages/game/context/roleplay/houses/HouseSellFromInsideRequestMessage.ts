import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { HouseSellRequestMessage } from "./HouseSellRequestMessage";

export class HouseSellFromInsideRequestMessage extends HouseSellRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6061;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseSellFromInsideRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseSellFromInsideRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseSellFromInsideRequestMessage.endpointServer;
    }

    public initHouseSellFromInsideRequestMessage(instanceId: number = 0, amount: number = 0, forSale: boolean = false): HouseSellFromInsideRequestMessage
    {
        super.initHouseSellRequestMessage(instanceId,amount,forSale);
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
        this.serializeAs_HouseSellFromInsideRequestMessage(output);
    }

    public serializeAs_HouseSellFromInsideRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_HouseSellRequestMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseSellFromInsideRequestMessage(input);
    }

    private deserializeAs_HouseSellFromInsideRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}