import { AbstractCharacterInformation } from "./../AbstractCharacterInformation";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class CharacterRemodelingInformation extends AbstractCharacterInformation implements INetworkType
{

	public static readonly protocolId: number = 5105;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

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

    public getTypeId()
    {
        return CharacterRemodelingInformation.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterRemodelingInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterRemodelingInformation.endpointServer;
    }

    public initCharacterRemodelingInformation(id: number = 0, name: string = "", breed: number = 0, sex: boolean = false, cosmeticId: number = 0, colors: Array<number> = null): CharacterRemodelingInformation
    {
        super.initAbstractCharacterInformation(id);
        this.name = name;
        this.breed = breed;
        this.sex = sex;
        this.cosmeticId = cosmeticId;
        this.colors = colors;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterRemodelingInformation(output);
    }

    public serializeAs_CharacterRemodelingInformation(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractCharacterInformation(output);
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