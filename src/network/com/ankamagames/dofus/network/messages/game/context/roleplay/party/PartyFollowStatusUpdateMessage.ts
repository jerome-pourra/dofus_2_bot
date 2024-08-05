import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../../jerakine/network/utils/BooleanByteWrapper";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyFollowStatusUpdateMessage extends AbstractPartyMessage
{

	public static readonly protocolId: number = 4068;

	public success: boolean = false;
	public isFollowed: boolean = false;
	public followedId: number = 0;

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
        this.deserializeAs_PartyFollowStatusUpdateMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.success = BooleanByteWrapper.getFlag(_box0,0);
        this.isFollowed = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_PartyFollowStatusUpdateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._followedIdFunc(input);
    }

    private _followedIdFunc(input: ICustomDataInput)
    {
        this.followedId = input.readVarUhLong();
        if(this.followedId < 0 || this.followedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.followedId + ") on element of PartyFollowStatusUpdateMessage.followedId.");
        }
    }

}