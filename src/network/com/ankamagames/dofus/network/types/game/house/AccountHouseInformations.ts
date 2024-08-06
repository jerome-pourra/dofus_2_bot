import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";
import { HouseInformations } from "./HouseInformations";

export class AccountHouseInformations extends HouseInformations implements INetworkType
{

	public static readonly protocolId: number = 8406;

	public houseInfos: HouseInstanceInformations;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;

    public constructor()
    {
        super();
        this.houseInfos = new HouseInstanceInformations();
    }

    public getTypeId()
    {
        return AccountHouseInformations.protocolId;
    }

    public initAccountHouseInformations(houseId: number = 0, modelId: number = 0, houseInfos: HouseInstanceInformations = null, worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0): AccountHouseInformations
    {
        super.initHouseInformations(houseId,modelId);
        this.houseInfos = houseInfos;
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AccountHouseInformations(output);
    }

    public serializeAs_AccountHouseInformations(output: ICustomDataOutput)
    {
        super.serializeAs_HouseInformations(output);
        output.writeShort(this.houseInfos.getTypeId());
        this.houseInfos.serialize(output);
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccountHouseInformations(input);
    }

    private deserializeAs_AccountHouseInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.houseInfos = ProtocolTypeManager.getInstance(HouseInstanceInformations,_id1);
        this.houseInfos.deserialize(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of AccountHouseInformations.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of AccountHouseInformations.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of AccountHouseInformations.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of AccountHouseInformations.subAreaId.");
        }
    }

}