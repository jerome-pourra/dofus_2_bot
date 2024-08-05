import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChatCommunityChannelSetCommunityRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2893;

	public communityId: number = 0;

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
        this.deserializeAs_ChatCommunityChannelSetCommunityRequestMessage(input);
    }

    private deserializeAs_ChatCommunityChannelSetCommunityRequestMessage(input: ICustomDataInput)
    {
        this._communityIdFunc(input);
    }

    private _communityIdFunc(input: ICustomDataInput)
    {
        this.communityId = input.readShort();
    }

}