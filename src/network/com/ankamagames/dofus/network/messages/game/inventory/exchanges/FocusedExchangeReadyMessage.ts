import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeReadyMessage } from "./ExchangeReadyMessage";

export class FocusedExchangeReadyMessage extends ExchangeReadyMessage
{

	public static readonly protocolId: number = 885;

	public focusActionId: number = 0;

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
        this.deserializeAs_FocusedExchangeReadyMessage(input);
    }

    private deserializeAs_FocusedExchangeReadyMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._focusActionIdFunc(input);
    }

    private _focusActionIdFunc(input: ICustomDataInput)
    {
        this.focusActionId = input.readVarUhInt();
        if(this.focusActionId < 0)
        {
            throw new Error("Forbidden value (" + this.focusActionId + ") on element of FocusedExchangeReadyMessage.focusActionId.");
        }
    }

}