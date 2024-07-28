import { ObjectEffect } from "./../../../../types/game/data/items/effects/ObjectEffect";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeBidHouseInListAddedMessage } from "./ExchangeBidHouseInListAddedMessage";

export class ExchangeBidHouseInListUpdatedMessage extends ExchangeBidHouseInListAddedMessage
{

	public static readonly protocolId: number = 9240;

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
        this.deserializeAs_ExchangeBidHouseInListUpdatedMessage(input);
    }

    private deserializeAs_ExchangeBidHouseInListUpdatedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}