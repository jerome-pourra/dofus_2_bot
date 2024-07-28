import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class CharacterCharacteristic
{

	public static readonly protocolId: number = 6701;

	public characteristicId: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCharacteristic(input);
    }

    private deserializeAs_CharacterCharacteristic(input: ICustomDataInput)
    {
        this._characteristicIdFunc(input);
    }

    private _characteristicIdFunc(input: ICustomDataInput)
    {
        this.characteristicId = input.readShort();
    }

}