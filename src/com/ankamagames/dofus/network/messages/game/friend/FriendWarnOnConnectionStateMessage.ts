import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendWarnOnConnectionStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 584;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendWarnOnConnectionStateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendWarnOnConnectionStateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendWarnOnConnectionStateMessage.endpointServer;
    }

    public initFriendWarnOnConnectionStateMessage(enable: boolean = false): FriendWarnOnConnectionStateMessage
    {
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
        this.serializeAs_FriendWarnOnConnectionStateMessage(output);
    }

    public serializeAs_FriendWarnOnConnectionStateMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendWarnOnConnectionStateMessage(input);
    }

    private deserializeAs_FriendWarnOnConnectionStateMessage(input: ICustomDataInput)
    {
        this._enableFunc(input);
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}