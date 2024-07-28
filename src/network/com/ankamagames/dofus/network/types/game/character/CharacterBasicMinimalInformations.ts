import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractCharacterInformation } from "./AbstractCharacterInformation";

export class CharacterBasicMinimalInformations extends AbstractCharacterInformation
{

	public static readonly protocolId: number = 6994;

	public name: string = "";

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterBasicMinimalInformations(input);
    }

    private deserializeAs_CharacterBasicMinimalInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}