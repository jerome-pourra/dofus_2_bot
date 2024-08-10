import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PopupWarningMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1024;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public lockDuration: number = 0;
	public author: string = "";
	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PopupWarningMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PopupWarningMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PopupWarningMessage.endpointServer;
    }

    public initPopupWarningMessage(lockDuration: number = 0, author: string = "", content: string = ""): PopupWarningMessage
    {
        this.lockDuration = lockDuration;
        this.author = author;
        this.content = content;
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
        this.serializeAs_PopupWarningMessage(output);
    }

    public serializeAs_PopupWarningMessage(output: ICustomDataOutput)
    {
        if(this.lockDuration < 0 || this.lockDuration > 255)
        {
            throw new Error("Forbidden value (" + this.lockDuration + ") on element lockDuration.");
        }
        output.writeByte(this.lockDuration);
        output.writeUTF(this.author);
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PopupWarningMessage(input);
    }

    private deserializeAs_PopupWarningMessage(input: ICustomDataInput)
    {
        this._lockDurationFunc(input);
        this._authorFunc(input);
        this._contentFunc(input);
    }

    private _lockDurationFunc(input: ICustomDataInput)
    {
        this.lockDuration = input.readUnsignedByte();
        if(this.lockDuration < 0 || this.lockDuration > 255)
        {
            throw new Error("Forbidden value (" + this.lockDuration + ") on element of PopupWarningMessage.lockDuration.");
        }
    }

    private _authorFunc(input: ICustomDataInput)
    {
        this.author = input.readUTF();
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}