import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInformations } from "./HouseInformations";

export class HouseInformationsForGuild extends HouseInformations
{

	public static readonly protocolId: number = 409;

	public instanceId: number = 0;
	public secondHand: boolean = false;
	public ownerTag: AccountTagInformation;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public skillListIds: Array<number>;
	public guildshareParams: number = 0;

    public constructor()
    {
        super();
        this.ownerTag = new AccountTagInformation();
        this.skillListIds = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseInformationsForGuild(input);
    }

    private deserializeAs_HouseInformationsForGuild(input: ICustomDataInput)
    {
        let _val8: number = 0;
        super.deserialize(input);
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
        this.ownerTag = new AccountTagInformation();
        this.ownerTag.deserialize(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        let _skillListIdsLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _skillListIdsLen; _i8++)
        {
            _val8 = input.readInt();
            this.skillListIds.push(_val8);
        }
        this._guildshareParamsFunc(input);
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseInformationsForGuild.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of HouseInformationsForGuild.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of HouseInformationsForGuild.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of HouseInformationsForGuild.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of HouseInformationsForGuild.subAreaId.");
        }
    }

    private _guildshareParamsFunc(input: ICustomDataInput)
    {
        this.guildshareParams = input.readVarUhInt();
        if(this.guildshareParams < 0)
        {
            throw new Error("Forbidden value (" + this.guildshareParams + ") on element of HouseInformationsForGuild.guildshareParams.");
        }
    }

}