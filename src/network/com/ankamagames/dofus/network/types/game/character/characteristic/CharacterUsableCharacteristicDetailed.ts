import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristicDetailed } from "./CharacterCharacteristicDetailed";

export class CharacterUsableCharacteristicDetailed extends CharacterCharacteristicDetailed implements INetworkType
{

	public static readonly protocolId: number = 1943;

	public used: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterUsableCharacteristicDetailed.protocolId;
    }

    public initCharacterUsableCharacteristicDetailed(characteristicId: number = 0, base: number = 0, additional: number = 0, objectsAndMountBonus: number = 0, alignGiftBonus: number = 0, contextModif: number = 0, used: number = 0): CharacterUsableCharacteristicDetailed
    {
        super.initCharacterCharacteristicDetailed(characteristicId,base,additional,objectsAndMountBonus,alignGiftBonus,contextModif);
        this.used = used;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterUsableCharacteristicDetailed(output);
    }

    public serializeAs_CharacterUsableCharacteristicDetailed(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterCharacteristicDetailed(output);
        if(this.used < 0)
        {
            throw new Error("Forbidden value (" + this.used + ") on element used.");
        }
        output.writeVarInt(this.used);
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