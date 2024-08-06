import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChannelEnablingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4965;

	public channel: number = 0;
	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChannelEnablingMessage.protocolId;
    }

    public initChannelEnablingMessage(channel: number = 0, enable: boolean = false): ChannelEnablingMessage
    {
        this.channel = channel;
        this.enable = enable;
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
        this.serializeAs_ChannelEnablingMessage(output);
    }

    public serializeAs_ChannelEnablingMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.channel);
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChannelEnablingMessage(input);
    }

    private deserializeAs_ChannelEnablingMessage(input: ICustomDataInput)
    {
        this._channelFunc(input);
        this._enableFunc(input);
    }

    private _channelFunc(input: ICustomDataInput)
    {
        this.channel = input.readByte();
        if(this.channel < 0)
        {
            throw new Error("Forbidden value (" + this.channel + ") on element of ChannelEnablingMessage.channel.");
        }
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}