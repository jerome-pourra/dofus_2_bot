import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountStableErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5267;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMountStableErrorMessage.protocolId;
    }

    public initExchangeMountStableErrorMessage(): ExchangeMountStableErrorMessage
    {
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
        this.serializeAs_ExchangeMountStableErrorMessage(output);
    }

    public serializeAs_ExchangeMountStableErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMountStableErrorMessage(input);
    }

    private deserializeAs_ExchangeMountStableErrorMessage(input: ICustomDataInput)
    {

    }

}