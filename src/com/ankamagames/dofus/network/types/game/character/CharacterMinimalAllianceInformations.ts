import { BasicNamedAllianceInformations } from "./../context/roleplay/BasicNamedAllianceInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalPlusLookInformations } from "./CharacterMinimalPlusLookInformations";

export class CharacterMinimalAllianceInformations extends CharacterMinimalPlusLookInformations implements INetworkType
{

	public static readonly protocolId: number = 4814;

	public alliance: BasicNamedAllianceInformations;

    public constructor()
    {
        super();
        this.alliance = new BasicNamedAllianceInformations();
    }

    public getTypeId()
    {
        return CharacterMinimalAllianceInformations.protocolId;
    }

    public initCharacterMinimalAllianceInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, alliance: BasicNamedAllianceInformations = null): CharacterMinimalAllianceInformations
    {
        super.initCharacterMinimalPlusLookInformations(id,name,level,entityLook,breed);
        this.alliance = alliance;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterMinimalAllianceInformations(output);
    }

    public serializeAs_CharacterMinimalAllianceInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterMinimalPlusLookInformations(output);
        this.alliance.serializeAs_BasicNamedAllianceInformations(output);
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