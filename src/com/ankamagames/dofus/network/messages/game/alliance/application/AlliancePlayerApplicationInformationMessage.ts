import { AllianceInformation } from "./../../../../types/game/context/roleplay/AllianceInformation";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AlliancePlayerApplicationAbstractMessage } from "./AlliancePlayerApplicationAbstractMessage";

export class AlliancePlayerApplicationInformationMessage extends AlliancePlayerApplicationAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9706;

	public allianceInformation: AllianceInformation;
	public apply: SocialApplicationInformation;

    public constructor()
    {
        super();
        this.allianceInformation = new AllianceInformation();
        this.apply = new SocialApplicationInformation();
    }

    public getMessageId()
    {
        return AlliancePlayerApplicationInformationMessage.protocolId;
    }

    public initAlliancePlayerApplicationInformationMessage(allianceInformation: AllianceInformation = null, apply: SocialApplicationInformation = null): AlliancePlayerApplicationInformationMessage
    {
        this.allianceInformation = allianceInformation;
        this.apply = apply;
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
        this.serializeAs_AlliancePlayerApplicationInformationMessage(output);
    }

    public serializeAs_AlliancePlayerApplicationInformationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AlliancePlayerApplicationAbstractMessage(output);
        this.allianceInformation.serializeAs_AllianceInformation(output);
        this.apply.serializeAs_SocialApplicationInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlliancePlayerApplicationInformationMessage(input);
    }

    private deserializeAs_AlliancePlayerApplicationInformationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.allianceInformation = new AllianceInformation();
        this.allianceInformation.deserialize(input);
        this.apply = new SocialApplicationInformation();
        this.apply.deserialize(input);
    }

}