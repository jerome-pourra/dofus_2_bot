import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftPaymentModifiedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2319;

	public goldSum: number = 0;

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