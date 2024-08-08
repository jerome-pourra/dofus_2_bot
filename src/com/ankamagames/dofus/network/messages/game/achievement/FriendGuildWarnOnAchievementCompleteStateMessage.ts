import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendGuildWarnOnAchievementCompleteStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1328;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendGuildWarnOnAchievementCompleteStateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendGuildWarnOnAchievementCompleteStateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendGuildWarnOnAchievementCompleteStateMessage.endpointServer;
    }

    public initFriendGuildWarnOnAchievementCompleteStateMessage(enable: boolean = false): FriendGuildWarnOnAchievementCompleteStateMessage
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
        this.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(output);
    }

    public serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(input);
    }

    private deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(input: ICustomDataInput)
    {
        this._enableFunc(input);
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}