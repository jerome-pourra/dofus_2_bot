import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SimpleCharacterCharacteristicForPreset
{

	public static readonly protocolId: number = 361;

	public keyword: string = "";
	public base: number = 0;
	public additionnal: number = 0;

    public constructor()
    {

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