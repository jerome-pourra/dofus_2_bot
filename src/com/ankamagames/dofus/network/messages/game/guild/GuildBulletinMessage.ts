import { BulletinMessage } from "./../social/BulletinMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildBulletinMessage extends BulletinMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1996;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildBulletinMessage.protocolId;
    }

    public initGuildBulletinMessage(content: string = "", timestamp: number = 0, memberId: number = 0, memberName: string = ""): GuildBulletinMessage
    {
        super.initBulletinMessage(content,timestamp,memberId,memberName);
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
        this.serializeAs_GuildBulletinMessage(output);
    }

    public serializeAs_GuildBulletinMessage(output: ICustomDataOutput)
    {
        super.serializeAs_BulletinMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildBulletinMessage(input);
    }

    private deserializeAs_GuildBulletinMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}