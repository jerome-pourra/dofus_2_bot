import { SocialNoticeMessage } from "./../social/SocialNoticeMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class AllianceMotdMessage extends SocialNoticeMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4661;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMotdMessage.protocolId;
    }

    public initAllianceMotdMessage(content: string = "", timestamp: number = 0, memberId: number = 0, memberName: string = ""): AllianceMotdMessage
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
        this.serializeAs_AllianceMotdMessage(output);
    }

    public serializeAs_AllianceMotdMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMotdMessage(input);
    }

    private deserializeAs_AllianceMotdMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}