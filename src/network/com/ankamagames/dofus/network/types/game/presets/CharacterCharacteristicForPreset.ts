import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { SimpleCharacterCharacteristicForPreset } from "./SimpleCharacterCharacteristicForPreset";

export class CharacterCharacteristicForPreset extends SimpleCharacterCharacteristicForPreset
{

	public static readonly protocolId: number = 3299;

	public stuff: number = 0;

    public constructor()
    {
        super();
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