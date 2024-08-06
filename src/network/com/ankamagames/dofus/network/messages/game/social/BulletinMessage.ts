import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { SocialNoticeMessage } from "./SocialNoticeMessage";

export class BulletinMessage extends SocialNoticeMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4597;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BulletinMessage.protocolId;
    }

    public initBulletinMessage(content: string = "", timestamp: number = 0, memberId: number = 0, memberName: string = ""): BulletinMessage
    {
        super.initSocialNoticeMessage(content,timestamp,memberId,memberName);
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
        this.serializeAs_BulletinMessage(output);
    }

    public serializeAs_BulletinMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BulletinMessage(input);
    }

    private deserializeAs_BulletinMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}