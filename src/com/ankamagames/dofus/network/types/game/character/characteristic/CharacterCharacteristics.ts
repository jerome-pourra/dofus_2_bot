import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristic } from "./CharacterCharacteristic";

export class CharacterCharacteristics implements INetworkType
{

	public static readonly protocolId: number = 294;

	public characteristics: Array<CharacterCharacteristic>;

    public constructor()
    {
        this.characteristics = Array<CharacterCharacteristic>();
    }

    public getTypeId()
    {
        return CharacterCharacteristics.protocolId;
    }

    public initCharacterCharacteristics(characteristics: Array<CharacterCharacteristic> = null): CharacterCharacteristics
    {
        this.characteristics = characteristics;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterCharacteristics(output);
    }

    public serializeAs_CharacterCharacteristics(output: ICustomDataOutput)
    {
        output.writeShort(this.characteristics.length);
        for(var _i1: number = 0; _i1 < this.characteristics.length; _i1++)
        {
            output.writeShort((this.characteristics[_i1] as CharacterCharacteristic).getTypeId());
            (this.characteristics[_i1] as CharacterCharacteristic).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCharacteristics(input);
    }

    private deserializeAs_CharacterCharacteristics(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: CharacterCharacteristic;
        let _characteristicsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _characteristicsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(CharacterCharacteristic,_id1);
            _item1.deserialize(input);
            this.characteristics.push(_item1);
        }
    }

}