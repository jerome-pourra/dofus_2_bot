import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristic } from "./CharacterCharacteristic";

export class CharacterCharacteristicValue extends CharacterCharacteristic implements INetworkType
{

	public static readonly protocolId: number = 3951;

	public total: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterCharacteristicValue.protocolId;
    }

    public initCharacterCharacteristicValue(characteristicId: number = 0, total: number = 0): CharacterCharacteristicValue
    {
        super.initCharacterCharacteristic(characteristicId);
        this.total = total;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterCharacteristicValue(output);
    }

    public serializeAs_CharacterCharacteristicValue(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterCharacteristic(output);
        output.writeInt(this.total);
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