import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangePodsModifiedMessage extends ExchangeObjectMessage
{

	public static readonly protocolId: number = 7160;

	public currentWeight: number = 0;
	public maxWeight: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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