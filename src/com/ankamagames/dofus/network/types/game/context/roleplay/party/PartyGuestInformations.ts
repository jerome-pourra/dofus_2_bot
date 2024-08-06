import { PlayerStatus } from "./../../../character/status/PlayerStatus";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PartyGuestInformations implements INetworkType
{

	public static readonly protocolId: number = 3127;

	public guestId: number = 0;
	public hostId: number = 0;
	public name: string = "";
	public guestLook: EntityLook;
	public breed: number = 0;
	public sex: boolean = false;
	public status: PlayerStatus;
	public entities: Array<PartyEntityBaseInformation>;

    public constructor()
    {
        this.guestLook = new EntityLook();
        this.status = new PlayerStatus();
        this.entities = Array<PartyEntityBaseInformation>();
    }

    public getTypeId()
    {
        return PartyGuestInformations.protocolId;
    }

    public initPartyGuestInformations(guestId: number = 0, hostId: number = 0, name: string = "", guestLook: EntityLook = null, breed: number = 0, sex: boolean = false, status: PlayerStatus = null, entities: Array<PartyEntityBaseInformation> = null): PartyGuestInformations
    {
        this.guestId = guestId;
        this.hostId = hostId;
        this.name = name;
        this.guestLook = guestLook;
        this.breed = breed;
        this.sex = sex;
        this.status = status;
        this.entities = entities;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyGuestInformations(output);
    }

    public serializeAs_PartyGuestInformations(output: ICustomDataOutput)
    {
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        }
        output.writeVarLong(this.guestId);
        if(this.hostId < 0 || this.hostId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.hostId + ") on element hostId.");
        }
        output.writeVarLong(this.hostId);
        output.writeUTF(this.name);
        this.guestLook.serializeAs_EntityLook(output);
        output.writeByte(this.breed);
        output.writeBoolean(this.sex);
        output.writeShort(this.status.getTypeId());
        this.status.serialize(output);
        output.writeShort(this.entities.length);
        for(var _i8: number = 0; _i8 < this.entities.length; _i8++)
        {
            (this.entities[_i8] as PartyEntityBaseInformation).serializeAs_PartyEntityBaseInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyGuestInformations(input);
    }

    private deserializeAs_PartyGuestInformations(input: ICustomDataInput)
    {
        let _item8: PartyEntityBaseInformation;
        this._guestIdFunc(input);
        this._hostIdFunc(input);
        this._nameFunc(input);
        this.guestLook = new EntityLook();
        this.guestLook.deserialize(input);
        this._breedFunc(input);
        this._sexFunc(input);
        let _id7: number = input.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus,_id7);
        this.status.deserialize(input);
        let _entitiesLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _entitiesLen; _i8++)
        {
            _item8 = new PartyEntityBaseInformation();
            _item8.deserialize(input);
            this.entities.push(_item8);
        }
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of PartyGuestInformations.guestId.");
        }
    }

    private _hostIdFunc(input: ICustomDataInput)
    {
        this.hostId = input.readVarUhLong();
        if(this.hostId < 0 || this.hostId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.hostId + ") on element of PartyGuestInformations.hostId.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

}