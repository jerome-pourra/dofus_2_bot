import { RankPublicInformation } from "./../guild/RankPublicInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalInformations } from "./CharacterMinimalInformations";

export class CharacterMinimalSocialPublicInformations extends CharacterMinimalInformations
{

	public static readonly protocolId: number = 5126;

	public rank: RankPublicInformation;

    public constructor()
    {
        super();
        this.rank = new RankPublicInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterMinimalSocialPublicInformations(input);
    }

    private deserializeAs_CharacterMinimalSocialPublicInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.rank = new RankPublicInformation();
        this.rank.deserialize(input);
    }

}