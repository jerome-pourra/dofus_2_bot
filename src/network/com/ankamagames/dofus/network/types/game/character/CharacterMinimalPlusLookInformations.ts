import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalInformations } from "./CharacterMinimalInformations";

export class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations
{

	public static readonly protocolId: number = 1529;

	public entityLook: EntityLook;
	public breed: number = 0;

    public constructor()
    {
        super();
        this.entityLook = new EntityLook();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterMinimalPlusLookInformations(input);
    }

    private deserializeAs_CharacterMinimalPlusLookInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(input);
        this._breedFunc(input);
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

}