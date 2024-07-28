import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class LoginQueueStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3098;

	public position: number = 0;
	public total: number = 0;

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
        this.deserializeAs_LoginQueueStatusMessage(input);
    }

    private deserializeAs_LoginQueueStatusMessage(input: ICustomDataInput)
    {
        this._positionFunc(input);
        this._totalFunc(input);
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readUnsignedShort();
        if(this.position < 0 || this.position > 65535)
        {
            throw new Error("Forbidden value (" + this.position + ") on element of LoginQueueStatusMessage.position.");
        }
    }

    private _totalFunc(input: ICustomDataInput)
    {
        this.total = input.readUnsignedShort();
        if(this.total < 0 || this.total > 65535)
        {
            throw new Error("Forbidden value (" + this.total + ") on element of LoginQueueStatusMessage.total.");
        }
    }

}