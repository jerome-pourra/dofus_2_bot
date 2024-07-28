import { GuildInformations } from "./../context/roleplay/GuildInformations";
import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";
import { FriendSpouseInformations } from "./FriendSpouseInformations";

export class FriendSpouseOnlineInformations extends FriendSpouseInformations
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