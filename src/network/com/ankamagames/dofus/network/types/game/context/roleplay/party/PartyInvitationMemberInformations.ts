import { CharacterBaseInformations } from "./../../../character/choice/CharacterBaseInformations";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PartyInvitationMemberInformations extends CharacterBaseInformations
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