import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ReportResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8138;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public success: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ReportResponseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ReportResponseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ReportResponseMessage.endpointServer;
    }

    public initReportResponseMessage(success: boolean = false): ReportResponseMessage
    {
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
        this.serializeAs_ReportResponseMessage(output);
    }

    public serializeAs_ReportResponseMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.success);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ReportResponseMessage(input);
    }

    private deserializeAs_ReportResponseMessage(input: ICustomDataInput)
    {
        this._successFunc(input);
    }

    private _successFunc(input: ICustomDataInput)
    {
        this.success = input.readBoolean();
    }

}