import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristic } from "./CharacterCharacteristic";

export class CharacterCharacteristicValue extends CharacterCharacteristic
{

	public static readonly protocolId: number = 3951;

	public total: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCharacteristicValue(input);
    }

    private deserializeAs_CharacterCharacteristicValue(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._totalFunc(input);
    }

    private _totalFunc(input: ICustomDataInput)
    {
        this.total = input.readInt();
    }

}