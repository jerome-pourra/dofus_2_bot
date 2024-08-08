import { CharacterCharacteristics } from "./../../character/characteristic/CharacterCharacteristics";
import { AllianceInformation } from "./../../context/roleplay/AllianceInformation";
import { ObjectItem } from "./../../data/items/ObjectItem";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AdditionalTaxCollectorInformation } from "./AdditionalTaxCollectorInformation";
import { TaxCollectorComplementaryInformations } from "./TaxCollectorComplementaryInformations";
import { TaxCollectorOrderedSpell } from "./TaxCollectorOrderedSpell";

export class TaxCollectorInformations implements INetworkType
{

	public static readonly protocolId: number = 4158;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public uniqueId: number = 0;
	public firstNameId: number = 0;
	public lastNameId: number = 0;
	public allianceIdentity: AllianceInformation;
	public additionalInfos: AdditionalTaxCollectorInformation;
	public worldX: number = 0;
	public worldY: number = 0;
	public subAreaId: number = 0;
	public state: number = 0;
	public look: EntityLook;
	public complements: Array<TaxCollectorComplementaryInformations>;
	public characteristics: CharacterCharacteristics;
	public equipments: Array<ObjectItem>;
	public spells: Array<TaxCollectorOrderedSpell>;

    public constructor()
    {
        this.allianceIdentity = new AllianceInformation();
        this.additionalInfos = new AdditionalTaxCollectorInformation();
        this.look = new EntityLook();
        this.complements = Array<TaxCollectorComplementaryInformations>();
        this.characteristics = new CharacterCharacteristics();
        this.equipments = Array<ObjectItem>();
        this.spells = Array<TaxCollectorOrderedSpell>();
    }

    public getTypeId()
    {
        return TaxCollectorInformations.protocolId;
    }

    public isEndpointClient()
    {
        return TaxCollectorInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return TaxCollectorInformations.endpointServer;
    }

    public initTaxCollectorInformations(uniqueId: number = 0, firstNameId: number = 0, lastNameId: number = 0, allianceIdentity: AllianceInformation = null, additionalInfos: AdditionalTaxCollectorInformation = null, worldX: number = 0, worldY: number = 0, subAreaId: number = 0, state: number = 0, look: EntityLook = null, complements: Array<TaxCollectorComplementaryInformations> = null, characteristics: CharacterCharacteristics = null, equipments: Array<ObjectItem> = null, spells: Array<TaxCollectorOrderedSpell> = null): TaxCollectorInformations
    {
        this.uniqueId = uniqueId;
        this.firstNameId = firstNameId;
        this.lastNameId = lastNameId;
        this.allianceIdentity = allianceIdentity;
        this.additionalInfos = additionalInfos;
        this.worldX = worldX;
        this.worldY = worldY;
        this.subAreaId = subAreaId;
        this.state = state;
        this.look = look;
        this.complements = complements;
        this.characteristics = characteristics;
        this.equipments = equipments;
        this.spells = spells;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TaxCollectorInformations(output);
    }

    public serializeAs_TaxCollectorInformations(output: ICustomDataOutput)
    {
        if(this.uniqueId < 0 || this.uniqueId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uniqueId + ") on element uniqueId.");
        }
        output.writeDouble(this.uniqueId);
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
        }
        output.writeVarShort(this.firstNameId);
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
        }
        output.writeVarShort(this.lastNameId);
        this.allianceIdentity.serializeAs_AllianceInformation(output);
        this.additionalInfos.serializeAs_AdditionalTaxCollectorInformation(output);
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
        }
        output.writeShort(this.worldX);
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        }
        output.writeShort(this.worldY);
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        output.writeByte(this.state);
        this.look.serializeAs_EntityLook(output);
        output.writeShort(this.complements.length);
        for(var _i11: number = 0; _i11 < this.complements.length; _i11++)
        {
            output.writeShort((this.complements[_i11] as TaxCollectorComplementaryInformations).getTypeId());
            (this.complements[_i11] as TaxCollectorComplementaryInformations).serialize(output);
        }
        this.characteristics.serializeAs_CharacterCharacteristics(output);
        output.writeShort(this.equipments.length);
        for(var _i13: number = 0; _i13 < this.equipments.length; _i13++)
        {
            (this.equipments[_i13] as ObjectItem).serializeAs_ObjectItem(output);
        }
        output.writeShort(this.spells.length);
        for(var _i14: number = 0; _i14 < this.spells.length; _i14++)
        {
            (this.spells[_i14] as TaxCollectorOrderedSpell).serializeAs_TaxCollectorOrderedSpell(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorInformations(input);
    }

    private deserializeAs_TaxCollectorInformations(input: ICustomDataInput)
    {
        let _id11: number = 0;
        let _item11: TaxCollectorComplementaryInformations;
        let _item13: ObjectItem;
        let _item14: TaxCollectorOrderedSpell;
        this._uniqueIdFunc(input);
        this._firstNameIdFunc(input);
        this._lastNameIdFunc(input);
        this.allianceIdentity = new AllianceInformation();
        this.allianceIdentity.deserialize(input);
        this.additionalInfos = new AdditionalTaxCollectorInformation();
        this.additionalInfos.deserialize(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._subAreaIdFunc(input);
        this._stateFunc(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
        let _complementsLen: number = input.readUnsignedShort();
        for(let _i11: number = 0; _i11 < _complementsLen; _i11++)
        {
            _id11 = input.readUnsignedShort();
            _item11 = ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations,_id11);
            _item11.deserialize(input);
            this.complements.push(_item11);
        }
        this.characteristics = new CharacterCharacteristics();
        this.characteristics.deserialize(input);
        let _equipmentsLen: number = input.readUnsignedShort();
        for(let _i13: number = 0; _i13 < _equipmentsLen; _i13++)
        {
            _item13 = new ObjectItem();
            _item13.deserialize(input);
            this.equipments.push(_item13);
        }
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i14: number = 0; _i14 < _spellsLen; _i14++)
        {
            _item14 = new TaxCollectorOrderedSpell();
            _item14.deserialize(input);
            this.spells.push(_item14);
        }
    }

    private _uniqueIdFunc(input: ICustomDataInput)
    {
        this.uniqueId = input.readDouble();
        if(this.uniqueId < 0 || this.uniqueId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uniqueId + ") on element of TaxCollectorInformations.uniqueId.");
        }
    }

    private _firstNameIdFunc(input: ICustomDataInput)
    {
        this.firstNameId = input.readVarUhShort();
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element of TaxCollectorInformations.firstNameId.");
        }
    }

    private _lastNameIdFunc(input: ICustomDataInput)
    {
        this.lastNameId = input.readVarUhShort();
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorInformations.lastNameId.");
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of TaxCollectorInformations.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of TaxCollectorInformations.worldY.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of TaxCollectorInformations.subAreaId.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of TaxCollectorInformations.state.");
        }
    }

}