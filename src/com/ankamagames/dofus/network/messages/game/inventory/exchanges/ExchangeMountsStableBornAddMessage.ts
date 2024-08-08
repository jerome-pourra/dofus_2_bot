import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeMountsStableAddMessage } from "./ExchangeMountsStableAddMessage";

export class ExchangeMountsStableBornAddMessage extends ExchangeMountsStableAddMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2861;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMountsStableBornAddMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeMountsStableBornAddMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeMountsStableBornAddMessage.endpointServer;
    }

    public initExchangeMountsStableBornAddMessage(mountDescription: Array<MountClientData> = null): ExchangeMountsStableBornAddMessage
    {
        super.initExchangeMountsStableAddMessage(mountDescription);
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
        this.serializeAs_ExchangeMountsStableBornAddMessage(output);
    }

    public serializeAs_ExchangeMountsStableBornAddMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeMountsStableAddMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMountsStableBornAddMessage(input);
    }

    private deserializeAs_ExchangeMountsStableBornAddMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}