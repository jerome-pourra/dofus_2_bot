import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { CharacterBasicMinimalInformations } from "./CharacterBasicMinimalInformations";

export class CharacterMinimalInformations extends CharacterBasicMinimalInformations
{

	public static readonly protocolId: number = 9474;

	public level: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterMinimalInformations(input);
    }

    private deserializeAs_CharacterMinimalInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._levelFunc(input);
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of CharacterMinimalInformations.level.");
        }
    }

}