import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftCountRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7189;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public count: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftCountRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeCraftCountRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeCraftCountRequestMessage.endpointServer;
    }

    public initExchangeCraftCountRequestMessage(count: number = 0): ExchangeCraftCountRequestMessage
    {
        this.count = count;
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
        this.serializeAs_ExchangeCraftCountRequestMessage(output);
    }

    public serializeAs_ExchangeCraftCountRequestMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.count);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftCountRequestMessage(input);
    }

    private deserializeAs_ExchangeCraftCountRequestMessage(input: ICustomDataInput)
    {
        this._countFunc(input);
    }

    private _countFunc(input: ICustomDataInput)
    {
        this.count = input.readVarInt();
    }

}