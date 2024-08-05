import { ActorExtendedAlignmentInformations } from "./../alignment/ActorExtendedAlignmentInformations";
import { SpellModifierMessage } from "./../spellmodifier/SpellModifierMessage";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterCharacteristic } from "./CharacterCharacteristic";

export class CharacterCharacteristicsInformations
{

	public static readonly protocolId: number = 4504;

	public experience: number = 0;
	public experienceLevelFloor: number = 0;
	public experienceNextLevelFloor: number = 0;
	public experienceBonusLimit: number = 0;
	public kamas: number = 0;
	public alignmentInfos: ActorExtendedAlignmentInformations;
	public criticalHitWeapon: number = 0;
	public characteristics: Array<CharacterCharacteristic>;
	public spellModifiers: Array<SpellModifierMessage>;
	public probationTime: number = 0;

    public constructor()
    {
        this.alignmentInfos = new ActorExtendedAlignmentInformations();
        this.characteristics = Array<CharacterCharacteristic>();
        this.spellModifiers = Array<SpellModifierMessage>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCharacteristicsInformations(input);
    }

    private deserializeAs_CharacterCharacteristicsInformations(input: ICustomDataInput)
    {
        let _id8: number = 0;
        let _item8: CharacterCharacteristic;
        let _item9: SpellModifierMessage;
        this._experienceFunc(input);
        this._experienceLevelFloorFunc(input);
        this._experienceNextLevelFloorFunc(input);
        this._experienceBonusLimitFunc(input);
        this._kamasFunc(input);
        this.alignmentInfos = new ActorExtendedAlignmentInformations();
        this.alignmentInfos.deserialize(input);
        this._criticalHitWeaponFunc(input);
        let _characteristicsLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _characteristicsLen; _i8++)
        {
            _id8 = input.readUnsignedShort();
            _item8 = ProtocolTypeManager.getInstance(CharacterCharacteristic,_id8);
            _item8.deserialize(input);
            this.characteristics.push(_item8);
        }
        let _spellModifiersLen: number = input.readUnsignedShort();
        for(let _i9: number = 0; _i9 < _spellModifiersLen; _i9++)
        {
            _item9 = new SpellModifierMessage();
            _item9.deserialize(input);
            this.spellModifiers.push(_item9);
        }
        this._probationTimeFunc(input);
    }

    private _experienceFunc(input: ICustomDataInput)
    {
        this.experience = input.readVarUhLong();
        if(this.experience < 0 || this.experience > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experience + ") on element of CharacterCharacteristicsInformations.experience.");
        }
    }

    private _experienceLevelFloorFunc(input: ICustomDataInput)
    {
        this.experienceLevelFloor = input.readVarUhLong();
        if(this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element of CharacterCharacteristicsInformations.experienceLevelFloor.");
        }
    }

    private _experienceNextLevelFloorFunc(input: ICustomDataInput)
    {
        this.experienceNextLevelFloor = input.readVarUhLong();
        if(this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element of CharacterCharacteristicsInformations.experienceNextLevelFloor.");
        }
    }

    private _experienceBonusLimitFunc(input: ICustomDataInput)
    {
        this.experienceBonusLimit = input.readVarUhLong();
        if(this.experienceBonusLimit < 0 || this.experienceBonusLimit > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.experienceBonusLimit + ") on element of CharacterCharacteristicsInformations.experienceBonusLimit.");
        }
    }

    private _kamasFunc(input: ICustomDataInput)
    {
        this.kamas = input.readVarUhLong();
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element of CharacterCharacteristicsInformations.kamas.");
        }
    }

    private _criticalHitWeaponFunc(input: ICustomDataInput)
    {
        this.criticalHitWeapon = input.readVarUhShort();
        if(this.criticalHitWeapon < 0)
        {
            throw new Error("Forbidden value (" + this.criticalHitWeapon + ") on element of CharacterCharacteristicsInformations.criticalHitWeapon.");
        }
    }

    private _probationTimeFunc(input: ICustomDataInput)
    {
        this.probationTime = input.readDouble();
        if(this.probationTime < 0 || this.probationTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.probationTime + ") on element of CharacterCharacteristicsInformations.probationTime.");
        }
    }

}