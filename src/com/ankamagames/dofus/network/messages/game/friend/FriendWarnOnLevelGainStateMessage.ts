import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendWarnOnLevelGainStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2158;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendWarnOnLevelGainStateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendWarnOnLevelGainStateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendWarnOnLevelGainStateMessage.endpointServer;
    }

    public initFriendWarnOnLevelGainStateMessage(enable: boolean = false): FriendWarnOnLevelGainStateMessage
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
        this.serializeAs_FriendWarnOnLevelGainStateMessage(output);
    }

    public serializeAs_FriendWarnOnLevelGainStateMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendWarnOnLevelGainStateMessage(input);
    }

    private deserializeAs_FriendWarnOnLevelGainStateMessage(input: ICustomDataInput)
    {
        this._enableFunc(input);
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}