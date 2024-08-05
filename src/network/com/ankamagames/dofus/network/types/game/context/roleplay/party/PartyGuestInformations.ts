import { PlayerStatus } from "./../../../character/status/PlayerStatus";
import { PartyEntityBaseInformation } from "./entity/PartyEntityBaseInformation";
import { EntityLook } from "./../../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PartyGuestInformations
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