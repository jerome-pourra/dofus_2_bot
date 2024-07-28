import { BufferInformation } from "./../../../types/web/haapi/BufferInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiBufferListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3;

	public buffers: Array<BufferInformation>;

    public constructor()
    {
        super();
        this.buffers = Array<BufferInformation>();
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
        this.deserializeAs_HaapiBufferListMessage(input);
    }

    private deserializeAs_HaapiBufferListMessage(input: ICustomDataInput)
    {
        let _item1: BufferInformation;
        let _buffersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _buffersLen; _i1++)
        {
            _item1 = new BufferInformation();
            _item1.deserialize(input);
            this.buffers.push(_item1);
        }
    }

}