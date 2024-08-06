import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftCountModifiedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7440;

	public count: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftCountModifiedMessage.protocolId;
    }

    public initExchangeCraftCountModifiedMessage(count: number = 0): ExchangeCraftCountModifiedMessage
    {
        this.count = count;
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
        this.serializeAs_ExchangeCraftCountModifiedMessage(output);
    }

    public serializeAs_ExchangeCraftCountModifiedMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.count);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftCountModifiedMessage(input);
    }

    private deserializeAs_ExchangeCraftCountModifiedMessage(input: ICustomDataInput)
    {
        this._countFunc(input);
    }

    private _countFunc(input: ICustomDataInput)
    {
        this.count = input.readVarInt();
    }

}