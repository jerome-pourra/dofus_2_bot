import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class LeaveDialogRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9643;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LeaveDialogRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return LeaveDialogRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return LeaveDialogRequestMessage.endpointServer;
    }

    public initLeaveDialogRequestMessage(): LeaveDialogRequestMessage
    {
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
        this.serializeAs_LeaveDialogRequestMessage(output);
    }

    public serializeAs_LeaveDialogRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LeaveDialogRequestMessage(input);
    }

    private deserializeAs_LeaveDialogRequestMessage(input: ICustomDataInput)
    {

    }

}