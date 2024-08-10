import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangePodsModifiedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7160;

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
        return ExchangePodsModifiedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangePodsModifiedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangePodsModifiedMessage.endpointServer;
    }

    public initExchangePodsModifiedMessage(remote: boolean = false, currentWeight: number = 0, maxWeight: number = 0): ExchangePodsModifiedMessage
    {
        super.initExchangeObjectMessage(remote);
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
        this.serializeAs_ExchangePodsModifiedMessage(output);
    }

    public serializeAs_ExchangePodsModifiedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
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
        this.deserializeAs_ExchangePodsModifiedMessage(input);
    }

    private deserializeAs_ExchangePodsModifiedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._currentWeightFunc(input);
        this._maxWeightFunc(input);
    }

    private _currentWeightFunc(input: ICustomDataInput)
    {
        this.currentWeight = input.readVarUhInt();
        if(this.currentWeight < 0)
        {
            throw new Error("Forbidden value (" + this.currentWeight + ") on element of ExchangePodsModifiedMessage.currentWeight.");
        }
    }

    private _maxWeightFunc(input: ICustomDataInput)
    {
        this.maxWeight = input.readVarUhInt();
        if(this.maxWeight < 0)
        {
            throw new Error("Forbidden value (" + this.maxWeight + ") on element of ExchangePodsModifiedMessage.maxWeight.");
        }
    }

}