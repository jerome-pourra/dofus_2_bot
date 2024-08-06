import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterMinimalInformations } from "./CharacterMinimalInformations";

export class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations implements INetworkType
{

	public static readonly protocolId: number = 1529;

	public entityLook: EntityLook;
	public breed: number = 0;

    public constructor()
    {
        super();
        this.entityLook = new EntityLook();
    }

    public getTypeId()
    {
        return CharacterMinimalPlusLookInformations.protocolId;
    }

    public initCharacterMinimalPlusLookInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0): CharacterMinimalPlusLookInformations
    {
        super.initCharacterMinimalInformations(id,name,level);
        this.entityLook = entityLook;
        this.breed = breed;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterMinimalPlusLookInformations(output);
    }

    public serializeAs_CharacterMinimalPlusLookInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterMinimalInformations(output);
        this.entityLook.serializeAs_EntityLook(output);
        output.writeByte(this.breed);
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