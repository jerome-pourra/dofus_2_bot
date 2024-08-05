import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class CheckFileRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5970;

	public filename: string = "";
	public type: number = 0;

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
        this.deserializeAs_CheckFileRequestMessage(input);
    }

    private deserializeAs_CheckFileRequestMessage(input: ICustomDataInput)
    {
        this._filenameFunc(input);
        this._typeFunc(input);
    }

    private _filenameFunc(input: ICustomDataInput)
    {
        this.filename = input.readUTF();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of CheckFileRequestMessage.type.");
        }
    }

}