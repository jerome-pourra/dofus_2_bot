import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SequenceNumberMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1188;

	public number: number = 0;

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
        this.deserializeAs_SequenceNumberMessage(input);
    }

    private deserializeAs_SequenceNumberMessage(input: ICustomDataInput)
    {
        this._numberFunc(input);
    }

    private _numberFunc(input: ICustomDataInput)
    {
        this.number = input.readUnsignedShort();
        if(this.number < 0 || this.number > 65535)
        {
            throw new Error("Forbidden value (" + this.number + ") on element of SequenceNumberMessage.number.");
        }
    }

}