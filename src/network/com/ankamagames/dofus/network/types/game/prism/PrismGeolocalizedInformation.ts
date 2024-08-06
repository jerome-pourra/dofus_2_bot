import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PrismInformation } from "./PrismInformation";

export class PrismGeolocalizedInformation implements INetworkType
{

	public static readonly protocolId: number = 9281;

	public subAreaId: number = 0;
	public allianceId: number = 0;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public prism: PrismInformation;

    public constructor()
    {
        this.prism = new PrismInformation();
    }

    public getTypeId()
    {
        return PrismGeolocalizedInformation.protocolId;
    }

    public initPrismGeolocalizedInformation(subAreaId: number = 0, allianceId: number = 0, worldX: number = 0, worldY: number = 0, mapId: number = 0, prism: PrismInformation = null): PrismGeolocalizedInformation
    {
        this.subAreaId = subAreaId;
        this.allianceId = allianceId;
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.prism = prism;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PrismGeolocalizedInformation(output);
    }

    public serializeAs_PrismGeolocalizedInformation(output: ICustomDataOutput)
    {
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
        }
        output.writeVarInt(this.allianceId);
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
        output.writeShort(this.prism.getTypeId());
        this.prism.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismGeolocalizedInformation(input);
    }

    private deserializeAs_PrismGeolocalizedInformation(input: ICustomDataInput)
    {
        this._subAreaIdFunc(input);
        this._allianceIdFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        let _id6: number = input.readUnsignedShort();
        this.prism = ProtocolTypeManager.getInstance(PrismInformation,_id6);
        this.prism.deserialize(input);
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismGeolocalizedInformation.subAreaId.");
        }
    }

    private _allianceIdFunc(input: ICustomDataInput)
    {
        this.allianceId = input.readVarUhInt();
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element of PrismGeolocalizedInformation.allianceId.");
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of PrismGeolocalizedInformation.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PrismGeolocalizedInformation.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of PrismGeolocalizedInformation.mapId.");
        }
    }

}