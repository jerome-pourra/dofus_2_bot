import { CharacterMinimalPlusLookInformations } from "./../CharacterMinimalPlusLookInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class CharacterBaseInformations extends CharacterMinimalPlusLookInformations implements INetworkType
{

	public static readonly protocolId: number = 4367;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public sex: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterBaseInformations.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterBaseInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterBaseInformations.endpointServer;
    }

    public initCharacterBaseInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, sex: boolean = false): CharacterBaseInformations
    {
        super.initCharacterMinimalPlusLookInformations(id,name,level,entityLook,breed);
        this.sex = sex;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterBaseInformations(output);
    }

    public serializeAs_CharacterBaseInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterMinimalPlusLookInformations(output);
        output.writeBoolean(this.sex);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterBaseInformations(input);
    }

    private deserializeAs_CharacterBaseInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._sexFunc(input);
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

}