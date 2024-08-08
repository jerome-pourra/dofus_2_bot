import { SocialNoticeSetRequestMessage } from "./../social/SocialNoticeSetRequestMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class AllianceMotdSetRequestMessage extends SocialNoticeSetRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1488;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMotdSetRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceMotdSetRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceMotdSetRequestMessage.endpointServer;
    }

    public initAllianceMotdSetRequestMessage(content: string = ""): AllianceMotdSetRequestMessage
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
        this.serializeAs_AllianceMotdSetRequestMessage(output);
    }

    public serializeAs_AllianceMotdSetRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SocialNoticeSetRequestMessage(output);
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMotdSetRequestMessage(input);
    }

    private deserializeAs_AllianceMotdSetRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}