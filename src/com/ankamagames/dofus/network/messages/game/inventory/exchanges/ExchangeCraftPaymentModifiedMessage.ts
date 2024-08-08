import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftPaymentModifiedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2319;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public goldSum: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftPaymentModifiedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeCraftPaymentModifiedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeCraftPaymentModifiedMessage.endpointServer;
    }

    public initExchangeCraftPaymentModifiedMessage(goldSum: number = 0): ExchangeCraftPaymentModifiedMessage
    {
        this.goldSum = goldSum;
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
        this.serializeAs_ExchangeCraftPaymentModifiedMessage(output);
    }

    public serializeAs_ExchangeCraftPaymentModifiedMessage(output: ICustomDataOutput)
    {
        if(this.goldSum < 0 || this.goldSum > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.goldSum + ") on element goldSum.");
        }
        output.writeVarLong(this.goldSum);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftPaymentModifiedMessage(input);
    }

    private deserializeAs_ExchangeCraftPaymentModifiedMessage(input: ICustomDataInput)
    {
        this._goldSumFunc(input);
    }

    private _goldSumFunc(input: ICustomDataInput)
    {
        this.goldSum = input.readVarUhLong();
        if(this.goldSum < 0 || this.goldSum > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.goldSum + ") on element of ExchangeCraftPaymentModifiedMessage.goldSum.");
        }
    }

}