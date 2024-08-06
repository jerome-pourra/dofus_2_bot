import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractCharacterInformation } from "./AbstractCharacterInformation";

export class CharacterBasicMinimalInformations extends AbstractCharacterInformation implements INetworkType
{

	public static readonly protocolId: number = 6994;

	public name: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterBasicMinimalInformations.protocolId;
    }

    public initCharacterBasicMinimalInformations(id: number = 0, name: string = ""): CharacterBasicMinimalInformations
    {
        super.initAbstractCharacterInformation(id);
        this.name = name;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterBasicMinimalInformations(output);
    }

    public serializeAs_CharacterBasicMinimalInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractCharacterInformation(output);
        output.writeUTF(this.name);
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