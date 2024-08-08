import { SocialNoticeSetRequestMessage } from "./../social/SocialNoticeSetRequestMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class AllianceBulletinSetRequestMessage extends SocialNoticeSetRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5995;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceBulletinSetRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceBulletinSetRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceBulletinSetRequestMessage.endpointServer;
    }

    public initAllianceBulletinSetRequestMessage(content: string = ""): AllianceBulletinSetRequestMessage
    {
        this.content = content;
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
        this.serializeAs_AllianceBulletinSetRequestMessage(output);
    }

    public serializeAs_AllianceBulletinSetRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeSetRequestMessage(output);
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceBulletinSetRequestMessage(input);
    }

    private deserializeAs_AllianceBulletinSetRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}