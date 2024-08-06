import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceChangeMemberRankMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1892;

	public memberId: number = 0;
	public rankId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceChangeMemberRankMessage.protocolId;
    }

    public initAllianceChangeMemberRankMessage(memberId: number = 0, rankId: number = 0): AllianceChangeMemberRankMessage
    {
        this.memberId = memberId;
        this.rankId = rankId;
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
        this.serializeAs_AllianceChangeMemberRankMessage(output);
    }

    public serializeAs_AllianceChangeMemberRankMessage(output: ICustomDataOutput)
    {
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element rankId.");
        }
        output.writeVarInt(this.rankId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceChangeMemberRankMessage(input);
    }

    private deserializeAs_AllianceChangeMemberRankMessage(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._rankIdFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of AllianceChangeMemberRankMessage.memberId.");
        }
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of AllianceChangeMemberRankMessage.rankId.");
        }
    }

}