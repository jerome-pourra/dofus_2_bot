import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendStatusShareStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8565;

	public share: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendStatusShareStateMessage.protocolId;
    }

    public initFriendStatusShareStateMessage(share: boolean = false): FriendStatusShareStateMessage
    {
        this.share = share;
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
        this.serializeAs_FriendStatusShareStateMessage(output);
    }

    public serializeAs_FriendStatusShareStateMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.share);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendStatusShareStateMessage(input);
    }

    private deserializeAs_FriendStatusShareStateMessage(input: ICustomDataInput)
    {
        this._shareFunc(input);
    }

    private _shareFunc(input: ICustomDataInput)
    {
        this.share = input.readBoolean();
    }

}