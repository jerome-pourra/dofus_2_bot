import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeRequestMessage } from "./ExchangeRequestMessage";

export class ExchangePlayerRequestMessage extends ExchangeRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9371;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public target: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangePlayerRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangePlayerRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangePlayerRequestMessage.endpointServer;
    }

    public initExchangePlayerRequestMessage(exchangeType: number = 0, target: number = 0): ExchangePlayerRequestMessage
    {
        super.initExchangeRequestMessage(exchangeType);
        this.target = target;
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
        this.serializeAs_ExchangePlayerRequestMessage(output);
    }

    public serializeAs_ExchangePlayerRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeRequestMessage(output);
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element target.");
        }
        output.writeVarLong(this.target);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangePlayerRequestMessage(input);
    }

    private deserializeAs_ExchangePlayerRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetFunc(input);
    }

    private _targetFunc(input: ICustomDataInput)
    {
        this.target = input.readVarUhLong();
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element of ExchangePlayerRequestMessage.target.");
        }
    }

}