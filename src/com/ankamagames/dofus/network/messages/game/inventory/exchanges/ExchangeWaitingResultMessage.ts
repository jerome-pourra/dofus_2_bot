import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeWaitingResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4276;

	public bwait: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeWaitingResultMessage.protocolId;
    }

    public initExchangeWaitingResultMessage(bwait: boolean = false): ExchangeWaitingResultMessage
    {
        this.bwait = bwait;
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
        this.serializeAs_ExchangeWaitingResultMessage(output);
    }

    public serializeAs_ExchangeWaitingResultMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.bwait);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeWaitingResultMessage(input);
    }

    private deserializeAs_ExchangeWaitingResultMessage(input: ICustomDataInput)
    {
        this._bwaitFunc(input);
    }

    private _bwaitFunc(input: ICustomDataInput)
    {
        this.bwait = input.readBoolean();
    }

}