import { BasicNamedAllianceInformations } from "./../context/roleplay/BasicNamedAllianceInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalPlusLookInformations } from "./CharacterMinimalPlusLookInformations";

export class CharacterMinimalAllianceInformations extends CharacterMinimalPlusLookInformations
{

	public static readonly protocolId: number = 4814;

	public alliance: BasicNamedAllianceInformations;

    public constructor()
    {
        super();
        this.alliance = new BasicNamedAllianceInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterMinimalAllianceInformations(input);
    }

    private deserializeAs_CharacterMinimalAllianceInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.alliance = new BasicNamedAllianceInformations();
        this.alliance.deserialize(input);
    }

}