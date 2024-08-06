import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class RemodelingInformation implements INetworkType
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

    public getTypeId()
    {
        return RemodelingInformation.protocolId;
    }

    public initRemodelingInformation(name: string = "", breed: number = 0, sex: boolean = false, cosmeticId: number = 0, colors: Array<number> = null): RemodelingInformation
    {
        this.name = name;
        this.breed = breed;
        this.sex = sex;
        this.cosmeticId = cosmeticId;
        this.colors = colors;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_RemodelingInformation(output);
    }

    public serializeAs_RemodelingInformation(output: ICustomDataOutput)
    {
        output.writeUTF(this.name);
        output.writeByte(this.breed);
        output.writeBoolean(this.sex);
        if(this.cosmeticId < 0)
        {
            throw new Error("Forbidden value (" + this.cosmeticId + ") on element cosmeticId.");
        }
        output.writeVarShort(this.cosmeticId);
        output.writeShort(this.colors.length);
        for(var _i5: number = 0; _i5 < this.colors.length; _i5++)
        {
            output.writeInt(this.colors[_i5]);
        }
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