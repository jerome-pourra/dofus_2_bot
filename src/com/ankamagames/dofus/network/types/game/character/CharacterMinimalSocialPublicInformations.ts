import { RankPublicInformation } from "./../guild/RankPublicInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalInformations } from "./CharacterMinimalInformations";

export class CharacterMinimalSocialPublicInformations extends CharacterMinimalInformations implements INetworkType
{

	public static readonly protocolId: number = 5126;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public rank: RankPublicInformation;

    public constructor()
    {
        super();
        this.rank = new RankPublicInformation();
    }

    public getTypeId()
    {
        return CharacterMinimalSocialPublicInformations.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterMinimalSocialPublicInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterMinimalSocialPublicInformations.endpointServer;
    }

    public initCharacterMinimalSocialPublicInformations(id: number = 0, name: string = "", level: number = 0, rank: RankPublicInformation = null): CharacterMinimalSocialPublicInformations
    {
        super.initCharacterMinimalInformations(id,name,level);
        this.rank = rank;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterMinimalSocialPublicInformations(output);
    }

    public serializeAs_CharacterMinimalSocialPublicInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterMinimalInformations(output);
        this.rank.serializeAs_RankPublicInformation(output);
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