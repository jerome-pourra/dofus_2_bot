import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeBidPriceMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4274;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public genericId: number = 0;
	public averagePrice: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeBidPriceMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeBidPriceMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeBidPriceMessage.endpointServer;
    }

    public initExchangeBidPriceMessage(genericId: number = 0, averagePrice: number = 0): ExchangeBidPriceMessage
    {
        this.genericId = genericId;
        this.averagePrice = averagePrice;
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
        this.serializeAs_ExchangeBidPriceMessage(output);
    }

    public serializeAs_ExchangeBidPriceMessage(output: ICustomDataOutput)
    {
        if(this.genericId < 0)
        {
            throw new Error("Forbidden value (" + this.genericId + ") on element genericId.");
        }
        output.writeVarInt(this.genericId);
        if(this.averagePrice < -9007199254740992 || this.averagePrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.averagePrice + ") on element averagePrice.");
        }
        output.writeVarLong(this.averagePrice);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeBidPriceMessage(input);
    }

    private deserializeAs_ExchangeBidPriceMessage(input: ICustomDataInput)
    {
        this._genericIdFunc(input);
        this._averagePriceFunc(input);
    }

    private _genericIdFunc(input: ICustomDataInput)
    {
        this.genericId = input.readVarUhInt();
        if(this.genericId < 0)
        {
            throw new Error("Forbidden value (" + this.genericId + ") on element of ExchangeBidPriceMessage.genericId.");
        }
    }

    private _averagePriceFunc(input: ICustomDataInput)
    {
        this.averagePrice = input.readVarLong();
        if(this.averagePrice < -9007199254740992 || this.averagePrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.averagePrice + ") on element of ExchangeBidPriceMessage.averagePrice.");
        }
    }

}