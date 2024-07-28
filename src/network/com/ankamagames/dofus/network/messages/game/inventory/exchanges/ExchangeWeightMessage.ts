import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeWeightMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1630;

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