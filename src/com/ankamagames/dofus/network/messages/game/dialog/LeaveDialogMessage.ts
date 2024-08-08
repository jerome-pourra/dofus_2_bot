import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class LeaveDialogMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6689;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dialogType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LeaveDialogMessage.protocolId;
    }

    public isEndpointClient()
    {
        return LeaveDialogMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return LeaveDialogMessage.endpointServer;
    }

    public initLeaveDialogMessage(dialogType: number = 0): LeaveDialogMessage
    {
        this.dialogType = dialogType;
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
        this.serializeAs_LeaveDialogMessage(output);
    }

    public serializeAs_LeaveDialogMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.dialogType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LeaveDialogMessage(input);
    }

    private deserializeAs_LeaveDialogMessage(input: ICustomDataInput)
    {
        this._dialogTypeFunc(input);
    }

    private _dialogTypeFunc(input: ICustomDataInput)
    {
        this.dialogType = input.readByte();
        if(this.dialogType < 0)
        {
            throw new Error("Forbidden value (" + this.dialogType + ") on element of LeaveDialogMessage.dialogType.");
        }
    }

}