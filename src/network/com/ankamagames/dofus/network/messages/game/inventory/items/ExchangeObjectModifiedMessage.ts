import { ExchangeObjectMessage } from "./../exchanges/ExchangeObjectMessage";
import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeObjectModifiedMessage extends ExchangeObjectMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7078;

	public object: ObjectItem;

    public constructor()
    {
        super();
        this.object = new ObjectItem();
    }

    public getMessageId()
    {
        return ExchangeObjectModifiedMessage.protocolId;
    }

    public initExchangeObjectModifiedMessage(remote: boolean = false, object: ObjectItem = null): ExchangeObjectModifiedMessage
    {
        super.initExchangeObjectMessage(remote);
        this.object = object;
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
        this.serializeAs_ExchangeObjectModifiedMessage(output);
    }

    public serializeAs_ExchangeObjectModifiedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeObjectMessage(output);
        this.object.serializeAs_ObjectItem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeObjectModifiedMessage(input);
    }

    private deserializeAs_ExchangeObjectModifiedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.object = new ObjectItem();
        this.object.deserialize(input);
    }

}