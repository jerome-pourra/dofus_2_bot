import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeReadyMessage } from "./ExchangeReadyMessage";

export class FocusedExchangeReadyMessage extends ExchangeReadyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 885;

	public focusActionId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FocusedExchangeReadyMessage.protocolId;
    }

    public initFocusedExchangeReadyMessage(ready: boolean = false, step: number = 0, focusActionId: number = 0): FocusedExchangeReadyMessage
    {
        super.initExchangeReadyMessage(ready,step);
        this.focusActionId = focusActionId;
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
        this.serializeAs_FocusedExchangeReadyMessage(output);
    }

    public serializeAs_FocusedExchangeReadyMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeReadyMessage(output);
        if(this.focusActionId < 0)
        {
            throw new Error("Forbidden value (" + this.focusActionId + ") on element focusActionId.");
        }
        output.writeVarInt(this.focusActionId);
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