import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SocialNoticeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4859;

	public content: string = "";
	public timestamp: number = 0;
	public memberId: number = 0;
	public memberName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SocialNoticeMessage.protocolId;
    }

    public initSocialNoticeMessage(content: string = "", timestamp: number = 0, memberId: number = 0, memberName: string = ""): SocialNoticeMessage
    {
        this.content = content;
        this.timestamp = timestamp;
        this.memberId = memberId;
        this.memberName = memberName;
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
        this.serializeAs_SocialNoticeMessage(output);
    }

    public serializeAs_SocialNoticeMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.content);
        if(this.timestamp < 0)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
        }
        output.writeInt(this.timestamp);
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
        output.writeUTF(this.memberName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialNoticeMessage(input);
    }

    private deserializeAs_SocialNoticeMessage(input: ICustomDataInput)
    {
        this._contentFunc(input);
        this._timestampFunc(input);
        this._memberIdFunc(input);
        this._memberNameFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

    private _timestampFunc(input: ICustomDataInput)
    {
        this.timestamp = input.readInt();
        if(this.timestamp < 0)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element of SocialNoticeMessage.timestamp.");
        }
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of SocialNoticeMessage.memberId.");
        }
    }

    private _memberNameFunc(input: ICustomDataInput)
    {
        this.memberName = input.readUTF();
    }

}