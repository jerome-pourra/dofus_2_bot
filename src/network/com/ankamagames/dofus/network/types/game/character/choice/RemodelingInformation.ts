import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class RemodelingInformation
{

	public static readonly protocolId: number = 3743;

	public name: string = "";
	public breed: number = 0;
	public sex: boolean = false;
	public cosmeticId: number = 0;
	public colors: Array<number>;

    public constructor()
    {
        this.colors = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RemodelingInformation(input);
    }

    private deserializeAs_RemodelingInformation(input: ICustomDataInput)
    {
        let _val5: number = 0;
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
            throw new Error("Forbidden value (" + this.cosmeticId + ") on element of RemodelingInformation.cosmeticId.");
        }
    }

}