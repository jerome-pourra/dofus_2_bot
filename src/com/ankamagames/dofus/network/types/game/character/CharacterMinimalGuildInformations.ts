import { BasicGuildInformations } from "./../context/roleplay/BasicGuildInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalPlusLookInformations } from "./CharacterMinimalPlusLookInformations";

export class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations implements INetworkType
{

	public static readonly protocolId: number = 2143;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guild: BasicGuildInformations;

    public constructor()
    {
        super();
        this.guild = new BasicGuildInformations();
    }

    public getTypeId()
    {
        return CharacterMinimalGuildInformations.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterMinimalGuildInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterMinimalGuildInformations.endpointServer;
    }

    public initCharacterMinimalGuildInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, guild: BasicGuildInformations = null): CharacterMinimalGuildInformations
    {
        super.initCharacterMinimalPlusLookInformations(id,name,level,entityLook,breed);
        this.guild = guild;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterMinimalGuildInformations(output);
    }

    public serializeAs_CharacterMinimalGuildInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterMinimalPlusLookInformations(output);
        this.guild.serializeAs_BasicGuildInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterMinimalGuildInformations(input);
    }

    private deserializeAs_CharacterMinimalGuildInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(input);
    }

}