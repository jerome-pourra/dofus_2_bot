import { CharacterBaseInformations } from "./../../../character/choice/CharacterBaseInformations";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PartyInvitationMemberInformations extends CharacterBaseInformations implements INetworkType
{

	public static readonly protocolId: number = 3577;

	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public entities: Array<PartyEntityBaseInformation>;

    public constructor()
    {
        super();
        this.entities = Array<PartyEntityBaseInformation>();
    }

    public getTypeId()
    {
        return PartyInvitationMemberInformations.protocolId;
    }

    public initPartyInvitationMemberInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, sex: boolean = false, worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0, entities: Array<PartyEntityBaseInformation> = null): PartyInvitationMemberInformations
    {
        super.initCharacterBaseInformations(id,name,level,entityLook,breed,sex);
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        this.entities = entities;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyInvitationMemberInformations(output);
    }

    public serializeAs_PartyInvitationMemberInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterBaseInformations(output);
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
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        output.writeShort(this.entities.length);
        for(var _i5: number = 0; _i5 < this.entities.length; _i5++)
        {
            (this.entities[_i5] as PartyEntityBaseInformation).serializeAs_PartyEntityBaseInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyInvitationMemberInformations(input);
    }

    private deserializeAs_PartyInvitationMemberInformations(input: ICustomDataInput)
    {
        let _item5: PartyEntityBaseInformation;
        super.deserialize(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        let _entitiesLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _entitiesLen; _i5++)
        {
            _item5 = new PartyEntityBaseInformation();
            _item5.deserialize(input);
            this.entities.push(_item5);
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of PartyInvitationMemberInformations.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PartyInvitationMemberInformations.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of PartyInvitationMemberInformations.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of PartyInvitationMemberInformations.subAreaId.");
        }
    }

}