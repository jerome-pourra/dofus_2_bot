import { ObjectItemNotInContainer } from "./../../../../types/game/data/items/ObjectItemNotInContainer";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeCraftResultMessage } from "./ExchangeCraftResultMessage";

export class ExchangeCraftResultWithObjectDescMessage extends ExchangeCraftResultMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4819;

	public objectInfo: ObjectItemNotInContainer;

    public constructor()
    {
        super();
        this.objectInfo = new ObjectItemNotInContainer();
    }

    public getMessageId()
    {
        return ExchangeCraftResultWithObjectDescMessage.protocolId;
    }

    public initExchangeCraftResultWithObjectDescMessage(craftResult: number = 0, objectInfo: ObjectItemNotInContainer = null): ExchangeCraftResultWithObjectDescMessage
    {
        super.initExchangeCraftResultMessage(craftResult);
        this.objectInfo = objectInfo;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeCraftResultWithObjectDescMessage(output);
    }

    public serializeAs_ExchangeCraftResultWithObjectDescMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeCraftResultMessage(output);
        this.objectInfo.serializeAs_ObjectItemNotInContainer(output);
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