import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterRemodelingInformation } from "./CharacterRemodelingInformation";

export class CharacterToRemodelInformations extends CharacterRemodelingInformation implements INetworkType
{

	public static readonly protocolId: number = 3313;

	public possibleChangeMask: number = 0;
	public mandatoryChangeMask: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterToRemodelInformations.protocolId;
    }

    public initCharacterToRemodelInformations(id: number = 0, name: string = "", breed: number = 0, sex: boolean = false, cosmeticId: number = 0, colors: Array<number> = null, possibleChangeMask: number = 0, mandatoryChangeMask: number = 0): CharacterToRemodelInformations
    {
        super.initCharacterRemodelingInformation(id,name,breed,sex,cosmeticId,colors);
        this.possibleChangeMask = possibleChangeMask;
        this.mandatoryChangeMask = mandatoryChangeMask;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterToRemodelInformations(output);
    }

    public serializeAs_CharacterToRemodelInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterRemodelingInformation(output);
        if(this.possibleChangeMask < 0)
        {
            throw new Error("Forbidden value (" + this.possibleChangeMask + ") on element possibleChangeMask.");
        }
        output.writeByte(this.possibleChangeMask);
        if(this.mandatoryChangeMask < 0)
        {
            throw new Error("Forbidden value (" + this.mandatoryChangeMask + ") on element mandatoryChangeMask.");
        }
        output.writeByte(this.mandatoryChangeMask);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterToRemodelInformations(input);
    }

    private deserializeAs_CharacterToRemodelInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._possibleChangeMaskFunc(input);
        this._mandatoryChangeMaskFunc(input);
    }

    private _possibleChangeMaskFunc(input: ICustomDataInput)
    {
        this.possibleChangeMask = input.readByte();
        if(this.possibleChangeMask < 0)
        {
            throw new Error("Forbidden value (" + this.possibleChangeMask + ") on element of CharacterToRemodelInformations.possibleChangeMask.");
        }
    }

    private _mandatoryChangeMaskFunc(input: ICustomDataInput)
    {
        this.mandatoryChangeMask = input.readByte();
        if(this.mandatoryChangeMask < 0)
        {
            throw new Error("Forbidden value (" + this.mandatoryChangeMask + ") on element of CharacterToRemodelInformations.mandatoryChangeMask.");
        }
    }

}