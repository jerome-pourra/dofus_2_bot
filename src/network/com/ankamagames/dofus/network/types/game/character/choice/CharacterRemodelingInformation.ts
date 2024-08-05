import { AbstractCharacterInformation } from "./../AbstractCharacterInformation";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class CharacterRemodelingInformation extends AbstractCharacterInformation
{

	public static readonly protocolId: number = 5105;

	public name: string = "";
	public breed: number = 0;
	public sex: boolean = false;
	public cosmeticId: number = 0;
	public colors: Array<number>;

    public constructor()
    {
        super();
        this.colors = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterRemodelingInformation(input);
    }

    private deserializeAs_CharacterRemodelingInformation(input: ICustomDataInput)
    {
        let _val5: number = 0;
        super.deserialize(input);
        this._nameFunc(input);
        this._breedFunc(input);
        this._sexFunc(input);
        this._cosmeticIdFunc(input);
        let _colorsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _colorsLen; _i5++)
        {
            _val5 = input.readInt();
            this.colors.push(_val5);
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _cosmeticIdFunc(input: ICustomDataInput)
    {
        this.cosmeticId = input.readVarUhShort();
        if(this.cosmeticId < 0)
        {
            throw new Error("Forbidden value (" + this.cosmeticId + ") on element of CharacterRemodelingInformation.cosmeticId.");
        }
    }

}