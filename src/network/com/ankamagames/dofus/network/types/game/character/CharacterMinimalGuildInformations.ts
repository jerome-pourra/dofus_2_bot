import { BasicGuildInformations } from "./../context/roleplay/BasicGuildInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalPlusLookInformations } from "./CharacterMinimalPlusLookInformations";

export class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations
{

	public static readonly protocolId: number = 2143;

	public guild: BasicGuildInformations;

    public constructor()
    {
        super();
        this.guild = new BasicGuildInformations();
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