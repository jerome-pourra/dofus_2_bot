import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SimpleCharacterCharacteristicForPreset } from "./SimpleCharacterCharacteristicForPreset";

export class CharacterCharacteristicForPreset extends SimpleCharacterCharacteristicForPreset implements INetworkType
{

	public static readonly protocolId: number = 3299;

	public stuff: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterCharacteristicForPreset.protocolId;
    }

    public initCharacterCharacteristicForPreset(keyword: string = "", base: number = 0, additionnal: number = 0, stuff: number = 0): CharacterCharacteristicForPreset
    {
        super.initSimpleCharacterCharacteristicForPreset(keyword,base,additionnal);
        this.stuff = stuff;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterCharacteristicForPreset(output);
    }

    public serializeAs_CharacterCharacteristicForPreset(output: ICustomDataOutput)
    {
        super.serializeAs_SimpleCharacterCharacteristicForPreset(output);
        output.writeVarInt(this.stuff);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCharacteristicForPreset(input);
    }

    private deserializeAs_CharacterCharacteristicForPreset(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._stuffFunc(input);
    }

    private _stuffFunc(input: ICustomDataInput)
    {
        this.stuff = input.readVarInt();
    }

}