import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristic } from "./CharacterCharacteristic";

export class CharacterCharacteristicDetailed extends CharacterCharacteristic implements INetworkType
{

	public static readonly protocolId: number = 901;

	public base: number = 0;
	public additional: number = 0;
	public objectsAndMountBonus: number = 0;
	public alignGiftBonus: number = 0;
	public contextModif: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterCharacteristicDetailed.protocolId;
    }

    public initCharacterCharacteristicDetailed(characteristicId: number = 0, base: number = 0, additional: number = 0, objectsAndMountBonus: number = 0, alignGiftBonus: number = 0, contextModif: number = 0): CharacterCharacteristicDetailed
    {
        super.initCharacterCharacteristic(characteristicId);
        this.base = base;
        this.additional = additional;
        this.objectsAndMountBonus = objectsAndMountBonus;
        this.alignGiftBonus = alignGiftBonus;
        this.contextModif = contextModif;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterCharacteristicDetailed(output);
    }

    public serializeAs_CharacterCharacteristicDetailed(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterCharacteristic(output);
        output.writeVarInt(this.base);
        output.writeVarInt(this.additional);
        output.writeVarInt(this.objectsAndMountBonus);
        output.writeVarInt(this.alignGiftBonus);
        output.writeVarInt(this.contextModif);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCharacteristicDetailed(input);
    }

    private deserializeAs_CharacterCharacteristicDetailed(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._baseFunc(input);
        this._additionalFunc(input);
        this._objectsAndMountBonusFunc(input);
        this._alignGiftBonusFunc(input);
        this._contextModifFunc(input);
    }

    private _baseFunc(input: ICustomDataInput)
    {
        this.base = input.readVarInt();
    }

    private _additionalFunc(input: ICustomDataInput)
    {
        this.additional = input.readVarInt();
    }

    private _objectsAndMountBonusFunc(input: ICustomDataInput)
    {
        this.objectsAndMountBonus = input.readVarInt();
    }

    private _alignGiftBonusFunc(input: ICustomDataInput)
    {
        this.alignGiftBonus = input.readVarInt();
    }

    private _contextModifFunc(input: ICustomDataInput)
    {
        this.contextModif = input.readVarInt();
    }

}