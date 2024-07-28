import { AllianceInformation } from "./../../../../types/game/context/roleplay/AllianceInformation";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AlliancePlayerApplicationAbstractMessage } from "./AlliancePlayerApplicationAbstractMessage";

export class AlliancePlayerApplicationInformationMessage extends AlliancePlayerApplicationAbstractMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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