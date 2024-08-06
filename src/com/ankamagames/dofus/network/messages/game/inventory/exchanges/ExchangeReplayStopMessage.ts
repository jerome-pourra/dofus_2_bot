import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeReplayStopMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2953;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeReplayStopMessage.protocolId;
    }

    public initExchangeReplayStopMessage(): ExchangeReplayStopMessage
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
        this.serializeAs_ExchangeReplayStopMessage(output);
    }

    public serializeAs_ExchangeReplayStopMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeReplayStopMessage(input);
    }

    private deserializeAs_ExchangeReplayStopMessage(input: ICustomDataInput)
    {

    }

}