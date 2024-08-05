import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PopupWarningMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1024;

	public lockDuration: number = 0;
	public author: string = "";
	public content: string = "";

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