import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceCreationValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5413;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public allianceName: string = "";
	public allianceTag: string = "";
	public allianceEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.allianceEmblem = new SocialEmblem();
    }

    public getMessageId()
    {
        return AllianceCreationValidMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceCreationValidMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceCreationValidMessage.endpointServer;
    }

    public initAllianceCreationValidMessage(allianceName: string = "", allianceTag: string = "", allianceEmblem: SocialEmblem = null): AllianceCreationValidMessage
    {
        this.allianceName = allianceName;
        this.allianceTag = allianceTag;
        this.allianceEmblem = allianceEmblem;
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
        this.serializeAs_AllianceCreationValidMessage(output);
    }

    public serializeAs_AllianceCreationValidMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.allianceName);
        output.writeUTF(this.allianceTag);
        this.allianceEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceCreationValidMessage(input);
    }

    private deserializeAs_AllianceCreationValidMessage(input: ICustomDataInput)
    {
        this._allianceNameFunc(input);
        this._allianceTagFunc(input);
        this.allianceEmblem = new SocialEmblem();
        this.allianceEmblem.deserialize(input);
    }

    private _allianceNameFunc(input: ICustomDataInput)
    {
        this.allianceName = input.readUTF();
    }

    private _allianceTagFunc(input: ICustomDataInput)
    {
        this.allianceTag = input.readUTF();
    }

}