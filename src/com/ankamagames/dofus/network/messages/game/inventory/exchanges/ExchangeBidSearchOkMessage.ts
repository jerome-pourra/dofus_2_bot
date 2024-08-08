import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidSearchOkMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8956;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidSearchOkMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidSearchOkMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidSearchOkMessage.endpointServer;
    }

    public initExchangeBidSearchOkMessage(): ExchangeBidSearchOkMessage
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
        this.serializeAs_ExchangeBidSearchOkMessage(output);
    }

    public serializeAs_ExchangeBidSearchOkMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidSearchOkMessage(input);
    }

    private deserializeAs_ExchangeBidSearchOkMessage(input: ICustomDataInput)
    {

    }

}