import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";
import { FriendSpouseInformations } from "./FriendSpouseInformations";

export class FriendSpouseOnlineInformations extends FriendSpouseInformations implements INetworkType
{

	public static readonly protocolId: number = 8676;

	public mapId: number = 0;
	public subAreaId: number = 0;
	public inFight: boolean = false;
	public followSpouse: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FriendSpouseOnlineInformations.protocolId;
    }

    public initFriendSpouseOnlineInformations(spouseAccountId: number = 0, spouseId: number = 0, spouseName: string = "", spouseLevel: number = 0, breed: number = 0, sex: number = 0, spouseEntityLook: EntityLook = null, guildInfo: GuildInformations = null, alignmentSide: number = 0, mapId: number = 0, subAreaId: number = 0, inFight: boolean = false, followSpouse: boolean = false): FriendSpouseOnlineInformations
    {
        super.initFriendSpouseInformations(spouseAccountId,spouseId,spouseName,spouseLevel,breed,sex,spouseEntityLook,guildInfo,alignmentSide);
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        this.inFight = inFight;
        this.followSpouse = followSpouse;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FriendSpouseOnlineInformations(output);
    }

    public serializeAs_FriendSpouseOnlineInformations(output: ICustomDataOutput)
    {
        super.serializeAs_FriendSpouseInformations(output);
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.inFight);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.followSpouse);
        output.writeByte(_box0);
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendSpouseOnlineInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.inFight = BooleanByteWrapper.getFlag(_box0,0);
        this.followSpouse = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_FriendSpouseOnlineInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of FriendSpouseOnlineInformations.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of FriendSpouseOnlineInformations.subAreaId.");
        }
    }

}