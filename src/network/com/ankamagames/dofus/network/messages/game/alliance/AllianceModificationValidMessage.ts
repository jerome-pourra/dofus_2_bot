import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceModificationValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4239;

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
        return AllianceModificationValidMessage.protocolId;
    }

    public initAllianceModificationValidMessage(allianceName: string = "", allianceTag: string = "", allianceEmblem: SocialEmblem = null): AllianceModificationValidMessage
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
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceModificationValidMessage(output);
    }

    public serializeAs_AllianceModificationValidMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.allianceName);
        output.writeUTF(this.allianceTag);
        this.allianceEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceModificationValidMessage(input);
    }

    private deserializeAs_AllianceModificationValidMessage(input: ICustomDataInput)
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