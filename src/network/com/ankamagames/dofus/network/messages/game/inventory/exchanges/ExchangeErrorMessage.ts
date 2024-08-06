import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9232;

	public errorType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeErrorMessage.protocolId;
    }

    public initExchangeErrorMessage(errorType: number = 0): ExchangeErrorMessage
    {
        this.errorType = errorType;
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
        this.serializeAs_ExchangeErrorMessage(output);
    }

    public serializeAs_ExchangeErrorMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.errorType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeErrorMessage(input);
    }

    private deserializeAs_ExchangeErrorMessage(input: ICustomDataInput)
    {
        this._errorTypeFunc(input);
    }

    private _errorTypeFunc(input: ICustomDataInput)
    {
        this.errorType = input.readByte();
    }

}