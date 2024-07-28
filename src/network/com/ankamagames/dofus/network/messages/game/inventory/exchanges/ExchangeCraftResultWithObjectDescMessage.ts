import { ObjectItemNotInContainer } from "./../../../../types/game/data/items/ObjectItemNotInContainer";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeCraftResultMessage } from "./ExchangeCraftResultMessage";

export class ExchangeCraftResultWithObjectDescMessage extends ExchangeCraftResultMessage
{

	public static readonly protocolId: number = 4819;

	public objectInfo: ObjectItemNotInContainer;

    public constructor()
    {
        super();
        this.objectInfo = new ObjectItemNotInContainer();
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
        this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(input);
    }

    private deserializeAs_ExchangeCraftResultWithObjectDescMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.objectInfo = new ObjectItemNotInContainer();
        this.objectInfo.deserialize(input);
    }

}