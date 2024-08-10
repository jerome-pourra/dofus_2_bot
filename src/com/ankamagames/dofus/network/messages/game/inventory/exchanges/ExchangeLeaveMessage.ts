import { LeaveDialogMessage } from "./../../dialog/LeaveDialogMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class ExchangeLeaveMessage extends LeaveDialogMessage implements INetworkMessage
{

	public static readonly protocolId: number = 384;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public success: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeLeaveMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeLeaveMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeLeaveMessage.endpointServer;
    }

    public initExchangeLeaveMessage(dialogType: number = 0, success: boolean = false): ExchangeLeaveMessage
    {
        super.initLeaveDialogMessage(dialogType);
        this.success = success;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeLeaveMessage(output);
    }

    public serializeAs_ExchangeLeaveMessage(output: ICustomDataOutput)
    {
        super.serializeAs_LeaveDialogMessage(output);
        output.writeBoolean(this.success);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeLeaveMessage(input);
    }

    private deserializeAs_ExchangeLeaveMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._successFunc(input);
    }

    private _successFunc(input: ICustomDataInput)
    {
        this.success = input.readBoolean();
    }

}