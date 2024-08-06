import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMoneyMovementInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6145;

	public limit: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMoneyMovementInformationMessage.protocolId;
    }

    public initExchangeMoneyMovementInformationMessage(limit: number = 0): ExchangeMoneyMovementInformationMessage
    {
        this.limit = limit;
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
        this.serializeAs_ExchangeMoneyMovementInformationMessage(output);
    }

    public serializeAs_ExchangeMoneyMovementInformationMessage(output: ICustomDataOutput)
    {
        if(this.limit < 0 || this.limit > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.limit + ") on element limit.");
        }
        output.writeVarLong(this.limit);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMoneyMovementInformationMessage(input);
    }

    private deserializeAs_ExchangeMoneyMovementInformationMessage(input: ICustomDataInput)
    {
        this._limitFunc(input);
    }

    private _limitFunc(input: ICustomDataInput)
    {
        this.limit = input.readVarUhLong();
        if(this.limit < 0 || this.limit > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.limit + ") on element of ExchangeMoneyMovementInformationMessage.limit.");
        }
    }

}