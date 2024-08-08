import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../../jerakine/network/utils/BooleanByteWrapper";
import { AbstractPartyMessage } from "./AbstractPartyMessage";

export class PartyFollowStatusUpdateMessage extends AbstractPartyMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4068;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public success: boolean = false;
	public isFollowed: boolean = false;
	public followedId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PartyFollowStatusUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PartyFollowStatusUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyFollowStatusUpdateMessage.endpointServer;
    }

    public initPartyFollowStatusUpdateMessage(partyId: number = 0, success: boolean = false, isFollowed: boolean = false, followedId: number = 0): PartyFollowStatusUpdateMessage
    {
        super.initAbstractPartyMessage(partyId);
        this.success = success;
        this.isFollowed = isFollowed;
        this.followedId = followedId;
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
        this.serializeAs_PartyFollowStatusUpdateMessage(output);
    }

    public serializeAs_PartyFollowStatusUpdateMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPartyMessage(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.success);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.isFollowed);
        output.writeByte(_box0);
        if(this.followedId < 0 || this.followedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.followedId + ") on element followedId.");
        }
        output.writeVarLong(this.followedId);
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