import { SocialEmblem } from "./../../../types/game/social/SocialEmblem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceModificationEmblemValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5179;

	public allianceEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.allianceEmblem = new SocialEmblem();
    }

    public getMessageId()
    {
        return AllianceModificationEmblemValidMessage.protocolId;
    }

    public initAllianceModificationEmblemValidMessage(allianceEmblem: SocialEmblem = null): AllianceModificationEmblemValidMessage
    {
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
        this.serializeAs_AllianceModificationEmblemValidMessage(output);
    }

    public serializeAs_AllianceModificationEmblemValidMessage(output: ICustomDataOutput)
    {
        this.allianceEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceModificationEmblemValidMessage(input);
    }

    private deserializeAs_AllianceModificationEmblemValidMessage(input: ICustomDataInput)
    {
        this.allianceEmblem = new SocialEmblem();
        this.allianceEmblem.deserialize(input);
    }

}