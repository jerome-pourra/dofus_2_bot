import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SequenceNumberMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1188;

	public number: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SequenceNumberMessage.protocolId;
    }

    public initSequenceNumberMessage(number: number = 0): SequenceNumberMessage
    {
        this.number = number;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SequenceNumberMessage(output);
    }

    public serializeAs_SequenceNumberMessage(output: ICustomDataOutput)
    {
        if(this.number < 0 || this.number > 65535)
        {
            throw new Error("Forbidden value (" + this.number + ") on element number.");
        }
        output.writeShort(this.number);
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