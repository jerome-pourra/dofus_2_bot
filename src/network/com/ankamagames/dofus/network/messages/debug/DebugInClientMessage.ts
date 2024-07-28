import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class DebugInClientMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6256;

	public level: number = 0;
	public message: string = "";

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
        this.deserializeAs_DebugInClientMessage(input);
    }

    private deserializeAs_DebugInClientMessage(input: ICustomDataInput)
    {
        this._levelFunc(input);
        this._messageFunc(input);
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readByte();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of DebugInClientMessage.level.");
        }
    }

    private _messageFunc(input: ICustomDataInput)
    {
        this.message = input.readUTF();
    }

}