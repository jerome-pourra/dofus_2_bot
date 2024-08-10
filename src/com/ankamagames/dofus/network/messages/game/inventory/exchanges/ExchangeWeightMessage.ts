import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeWeightMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1630;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public currentWeight: number = 0;
	public maxWeight: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeWeightMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeWeightMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeWeightMessage.endpointServer;
    }

    public initExchangeWeightMessage(currentWeight: number = 0, maxWeight: number = 0): ExchangeWeightMessage
    {
        this.currentWeight = currentWeight;
        this.maxWeight = maxWeight;
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
        this.serializeAs_ExchangeWeightMessage(output);
    }

    public serializeAs_ExchangeWeightMessage(output: ICustomDataOutput)
    {
        if(this.currentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.currentWeight + ") on element currentWeight.");
        }
        output.writeVarInt(this.currentWeight);
        if(this.maxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.maxWeight + ") on element maxWeight.");
        }
        output.writeVarInt(this.maxWeight);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeWeightMessage(input);
    }

    private deserializeAs_ExchangeWeightMessage(input: ICustomDataInput)
    {
        this._currentWeightFunc(input);
        this._maxWeightFunc(input);
    }

    private _currentWeightFunc(input: ICustomDataInput)
    {
        this.currentWeight = input.readVarUhInt();
        if(this.currentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.currentWeight + ") on element of ExchangeWeightMessage.currentWeight.");
        }
    }

    private _maxWeightFunc(input: ICustomDataInput)
    {
        this.maxWeight = input.readVarUhInt();
        if(this.maxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.maxWeight + ") on element of ExchangeWeightMessage.maxWeight.");
        }
    }

}