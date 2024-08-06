import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendGuildSetWarnOnAchievementCompleteMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2747;

	public enable: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendGuildSetWarnOnAchievementCompleteMessage.protocolId;
    }

    public initFriendGuildSetWarnOnAchievementCompleteMessage(enable: boolean = false): FriendGuildSetWarnOnAchievementCompleteMessage
    {
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
        this.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(output);
    }

    public serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.enable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(input);
    }

    private deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(input: ICustomDataInput)
    {
        this._enableFunc(input);
    }

    private _enableFunc(input: ICustomDataInput)
    {
        this.enable = input.readBoolean();
    }

}