import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SimpleCharacterCharacteristicForPreset implements INetworkType
{

	public static readonly protocolId: number = 361;

	public keyword: string = "";
	public base: number = 0;
	public additionnal: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SimpleCharacterCharacteristicForPreset.protocolId;
    }

    public initSimpleCharacterCharacteristicForPreset(keyword: string = "", base: number = 0, additionnal: number = 0): SimpleCharacterCharacteristicForPreset
    {
        this.keyword = keyword;
        this.base = base;
        this.additionnal = additionnal;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SimpleCharacterCharacteristicForPreset(output);
    }

    public serializeAs_SimpleCharacterCharacteristicForPreset(output: ICustomDataOutput)
    {
        output.writeUTF(this.keyword);
        output.writeVarInt(this.base);
        output.writeVarInt(this.additionnal);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SimpleCharacterCharacteristicForPreset(input);
    }

    private deserializeAs_SimpleCharacterCharacteristicForPreset(input: ICustomDataInput)
    {
        this._keywordFunc(input);
        this._baseFunc(input);
        this._additionnalFunc(input);
    }

    private _keywordFunc(input: ICustomDataInput)
    {
        this.keyword = input.readUTF();
    }

    private _baseFunc(input: ICustomDataInput)
    {
        this.base = input.readVarInt();
    }

    private _additionnalFunc(input: ICustomDataInput)
    {
        this.additionnal = input.readVarInt();
    }

}