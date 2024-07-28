import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeObjectMovePricedMessage } from "./ExchangeObjectMovePricedMessage";

export class ExchangeObjectModifyPricedMessage extends ExchangeObjectMovePricedMessage
{

	public static readonly protocolId: number = 1058;

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
        this.deserializeAs_ExchangeObjectModifyPricedMessage(input);
    }

    private deserializeAs_ExchangeObjectModifyPricedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}