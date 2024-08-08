import { BulletinMessage } from "./../social/BulletinMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildBulletinMessage extends BulletinMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1996;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildBulletinMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildBulletinMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildBulletinMessage.endpointServer;
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
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
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