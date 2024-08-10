import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChannelEnablingChangeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7739;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public channel: number = 0;
	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChannelEnablingChangeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChannelEnablingChangeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChannelEnablingChangeMessage.endpointServer;
    }

    public initChannelEnablingChangeMessage(channel: number = 0, enable: boolean = false): ChannelEnablingChangeMessage
    {
        this.channel = channel;
        this.enable = enable;
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
        this.serializeAs_ChannelEnablingChangeMessage(output);
    }

    public serializeAs_ChannelEnablingChangeMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.channel);
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChannelEnablingChangeMessage(input);
    }

    private deserializeAs_ChannelEnablingChangeMessage(input: ICustomDataInput)
    {
        this._channelFunc(input);
        this._enableFunc(input);
    }

    private _channelFunc(input: ICustomDataInput)
    {
        this.channel = input.readByte();
        if(this.channel < 0)
        {
            throw new Error("Forbidden value (" + this.channel + ") on element of ChannelEnablingChangeMessage.channel.");
        }
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}