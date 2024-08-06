import { BufferInformation } from "./../../../types/web/haapi/BufferInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiBufferListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3;

	public buffers: Array<BufferInformation>;

    public constructor()
    {
        super();
        this.buffers = Array<BufferInformation>();
    }

    public getMessageId()
    {
        return HaapiBufferListMessage.protocolId;
    }

    public initHaapiBufferListMessage(buffers: Array<BufferInformation> = null): HaapiBufferListMessage
    {
        this.buffers = buffers;
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
        this.serializeAs_HaapiBufferListMessage(output);
    }

    public serializeAs_HaapiBufferListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.buffers.length);
        for(var _i1: number = 0; _i1 < this.buffers.length; _i1++)
        {
            (this.buffers[_i1] as BufferInformation).serializeAs_BufferInformation(output);
        }
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