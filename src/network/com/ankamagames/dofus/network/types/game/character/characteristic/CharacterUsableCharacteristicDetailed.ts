import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristicDetailed } from "./CharacterCharacteristicDetailed";

export class CharacterUsableCharacteristicDetailed extends CharacterCharacteristicDetailed
{

	public static readonly protocolId: number = 1943;

	public used: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterUsableCharacteristicDetailed(input);
    }

    private deserializeAs_CharacterUsableCharacteristicDetailed(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._usedFunc(input);
    }

    private _usedFunc(input: ICustomDataInput)
    {
        this.used = input.readVarUhInt();
        if(this.used < 0)
        {
            throw new Error("Forbidden value (" + this.used + ") on element of CharacterUsableCharacteristicDetailed.used.");
        }
    }

}