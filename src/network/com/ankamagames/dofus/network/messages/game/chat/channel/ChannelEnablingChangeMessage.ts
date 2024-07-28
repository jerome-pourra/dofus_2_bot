import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChannelEnablingChangeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7739;

	public channel: number = 0;
	public enable: boolean = false;

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