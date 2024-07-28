import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2919;

	public exchangeType: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_ExchangeRequestMessage(input);
    }

    private deserializeAs_ExchangeRequestMessage(input: ICustomDataInput)
    {
        this._exchangeTypeFunc(input);
    }

    private _exchangeTypeFunc(input: ICustomDataInput)
    {
        this.exchangeType = input.readByte();
    }

}