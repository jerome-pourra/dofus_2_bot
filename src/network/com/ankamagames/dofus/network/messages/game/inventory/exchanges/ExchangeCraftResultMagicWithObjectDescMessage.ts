import { ObjectItemNotInContainer } from "./../../../../types/game/data/items/ObjectItemNotInContainer";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeCraftResultWithObjectDescMessage } from "./ExchangeCraftResultWithObjectDescMessage";

export class ExchangeCraftResultMagicWithObjectDescMessage extends ExchangeCraftResultWithObjectDescMessage implements INetworkMessage
{

	public static readonly protocolId: number = 95;

	public magicPoolStatus: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftResultMagicWithObjectDescMessage.protocolId;
    }

    public initExchangeCraftResultMagicWithObjectDescMessage(craftResult: number = 0, objectInfo: ObjectItemNotInContainer = null, magicPoolStatus: number = 0): ExchangeCraftResultMagicWithObjectDescMessage
    {
        super.initExchangeCraftResultWithObjectDescMessage(craftResult,objectInfo);
        this.magicPoolStatus = magicPoolStatus;
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
        this.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(output);
    }

    public serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeCraftResultWithObjectDescMessage(output);
        output.writeByte(this.magicPoolStatus);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(input);
    }

    private deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._magicPoolStatusFunc(input);
    }

    private _magicPoolStatusFunc(input: ICustomDataInput)
    {
        this.magicPoolStatus = input.readByte();
    }

}