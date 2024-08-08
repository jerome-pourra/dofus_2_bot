import { CharacterBaseInformations } from "./../../../character/choice/CharacterBaseInformations";
import { PlayerStatus } from "./../../../character/status/PlayerStatus";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PartyMemberInformations extends CharacterBaseInformations implements INetworkType
{

	public static readonly protocolId: number = 9391;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public lifePoints: number = 0;
	public maxLifePoints: number = 0;
	public prospecting: number = 0;
	public regenRate: number = 0;
	public initiative: number = 0;
	public alignmentSide: number = 0;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public status: PlayerStatus;
	public entities: Array<PartyEntityBaseInformation>;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
        this.entities = Array<PartyEntityBaseInformation>();
    }

    public getTypeId()
    {
        return PartyMemberInformations.protocolId;
    }

    public isEndpointClient()
    {
        return PartyMemberInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyMemberInformations.endpointServer;
    }

    public initPartyMemberInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, sex: boolean = false, lifePoints: number = 0, maxLifePoints: number = 0, prospecting: number = 0, regenRate: number = 0, initiative: number = 0, alignmentSide: number = 0, worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0, status: PlayerStatus = null, entities: Array<PartyEntityBaseInformation> = null): PartyMemberInformations
    {
        super.initCharacterBaseInformations(id,name,level,entityLook,breed,sex);
        this.lifePoints = lifePoints;
        this.maxLifePoints = maxLifePoints;
        this.prospecting = prospecting;
        this.regenRate = regenRate;
        this.initiative = initiative;
        this.alignmentSide = alignmentSide;
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        this.status = status;
        this.entities = entities;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyMemberInformations(output);
    }

    public serializeAs_PartyMemberInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterBaseInformations(output);
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
        }
        output.writeVarInt(this.lifePoints);
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
        }
        output.writeVarInt(this.maxLifePoints);
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
        }
        output.writeVarInt(this.prospecting);
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
        }
        output.writeByte(this.regenRate);
        if(this.initiative < 0)
        {
            throw new Error("Forbidden value (" + this.initiative + ") on element initiative.");
        }
        output.writeVarInt(this.initiative);
        output.writeByte(this.alignmentSide);
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
        output.writeShort(this.status.getTypeId());
        this.status.serialize(output);
        output.writeShort(this.entities.length);
        for(var _i12: number = 0; _i12 < this.entities.length; _i12++)
        {
            output.writeShort((this.entities[_i12] as PartyEntityBaseInformation).getTypeId());
            (this.entities[_i12] as PartyEntityBaseInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyMemberInformations(input);
    }

    private deserializeAs_PartyMemberInformations(input: ICustomDataInput)
    {
        let _id12: number = 0;
        let _item12: PartyEntityBaseInformation;
        super.deserialize(input);
        this._lifePointsFunc(input);
        this._maxLifePointsFunc(input);
        this._prospectingFunc(input);
        this._regenRateFunc(input);
        this._initiativeFunc(input);
        this._alignmentSideFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        let _id11: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id11);
        this.status.deserialize(input);
        let _entitiesLen: number = input.readUnsignedShort();
        for(let _i12: number = 0; _i12 < _entitiesLen; _i12++)
        {
            _id12 = input.readUnsignedShort();
            _item12 = ProtocolTypeManager.getInstance(PartyEntityBaseInformation,_id12);
            _item12.deserialize(input);
            this.entities.push(_item12);
        }
    }

    private _lifePointsFunc(input: ICustomDataInput)
    {
        this.lifePoints = input.readVarUhInt();
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element of PartyMemberInformations.lifePoints.");
        }
    }

    private _maxLifePointsFunc(input: ICustomDataInput)
    {
        this.maxLifePoints = input.readVarUhInt();
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of PartyMemberInformations.maxLifePoints.");
        }
    }

    private _prospectingFunc(input: ICustomDataInput)
    {
        this.prospecting = input.readVarUhInt();
        if(this.prospecting < 0)
        {
            throw new Error("Forbidden value (" + this.prospecting + ") on element of PartyMemberInformations.prospecting.");
        }
    }

    private _regenRateFunc(input: ICustomDataInput)
    {
        this.regenRate = input.readUnsignedByte();
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element of PartyMemberInformations.regenRate.");
        }
    }

    private _initiativeFunc(input: ICustomDataInput)
    {
        this.initiative = input.readVarUhInt();
        if(this.initiative < 0)
        {
            throw new Error("Forbidden value (" + this.initiative + ") on element of PartyMemberInformations.initiative.");
        }
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of PartyMemberInformations.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PartyMemberInformations.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of PartyMemberInformations.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of PartyMemberInformations.subAreaId.");
        }
    }

}