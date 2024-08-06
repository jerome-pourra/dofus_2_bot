import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class CharacterCharacteristic implements INetworkType
{

	public static readonly protocolId: number = 6701;

	public characteristicId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return CharacterCharacteristic.protocolId;
    }

    public initCharacterCharacteristic(characteristicId: number = 0): CharacterCharacteristic
    {
        this.characteristicId = characteristicId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterCharacteristic(output);
    }

    public serializeAs_CharacterCharacteristic(output: ICustomDataOutput)
    {
        output.writeShort(this.characteristicId);
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