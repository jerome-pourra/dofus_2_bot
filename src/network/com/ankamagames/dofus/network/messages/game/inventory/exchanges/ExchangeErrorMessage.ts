import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeErrorMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9232;

	public errorType: number = 0;

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