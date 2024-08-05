import { CharacterMinimalPlusLookInformations } from "./../CharacterMinimalPlusLookInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class CharacterBaseInformations extends CharacterMinimalPlusLookInformations
{

	public static readonly protocolId: number = 4367;

	public sex: boolean = false;

    public constructor()
    {
        super();
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