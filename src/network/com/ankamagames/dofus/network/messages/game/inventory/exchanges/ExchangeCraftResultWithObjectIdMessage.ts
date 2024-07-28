import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeCraftResultMessage } from "./ExchangeCraftResultMessage";

export class ExchangeCraftResultWithObjectIdMessage extends ExchangeCraftResultMessage
{

	public static readonly protocolId: number = 1423;

	public objectGenericId: number = 0;

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
        this.deserializeAs_ExchangeCraftResultWithObjectIdMessage(input);
    }

    private deserializeAs_ExchangeCraftResultWithObjectIdMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectGenericIdFunc(input);
    }

    private _objectGenericIdFunc(input: ICustomDataInput)
    {
        this.objectGenericId = input.readVarUhInt();
        if(this.objectGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.objectGenericId + ") on element of ExchangeCraftResultWithObjectIdMessage.objectGenericId.");
        }
    }

}