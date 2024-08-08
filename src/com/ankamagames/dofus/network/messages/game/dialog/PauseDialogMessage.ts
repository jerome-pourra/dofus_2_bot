import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PauseDialogMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3238;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public dialogType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PauseDialogMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PauseDialogMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PauseDialogMessage.endpointServer;
    }

    public initPauseDialogMessage(dialogType: number = 0): PauseDialogMessage
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
        this.serializeAs_PauseDialogMessage(output);
    }

    public serializeAs_PauseDialogMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.dialogType);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PauseDialogMessage(input);
    }

    private deserializeAs_PauseDialogMessage(input: ICustomDataInput)
    {
        this._dialogTypeFunc(input);
    }

    private _dialogTypeFunc(input: ICustomDataInput)
    {
        this.dialogType = input.readByte();
        if(this.dialogType < 0)
        {
            throw new Error("Forbidden value (" + this.dialogType + ") on element of PauseDialogMessage.dialogType.");
        }
    }

}