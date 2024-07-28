import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeWaitingResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4276;

	public bwait: boolean = false;

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