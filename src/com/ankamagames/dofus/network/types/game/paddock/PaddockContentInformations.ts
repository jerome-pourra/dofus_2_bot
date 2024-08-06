import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { MountInformationsForPaddock } from "./MountInformationsForPaddock";
import { PaddockInformations } from "./PaddockInformations";

export class PaddockContentInformations extends PaddockInformations implements INetworkType
{

	public static readonly protocolId: number = 6426;

	public paddockId: number = 0;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;
	public abandonned: boolean = false;
	public mountsInformations: Array<MountInformationsForPaddock>;

    public constructor()
    {
        super();
        this.mountsInformations = Array<MountInformationsForPaddock>();
    }

    public getTypeId()
    {
        return PaddockContentInformations.protocolId;
    }

    public initPaddockContentInformations(maxOutdoorMount: number = 0, maxItems: number = 0, paddockId: number = 0, worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0, abandonned: boolean = false, mountsInformations: Array<MountInformationsForPaddock> = null): PaddockContentInformations
    {
        super.initPaddockInformations(maxOutdoorMount,maxItems);
        this.paddockId = paddockId;
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        this.abandonned = abandonned;
        this.mountsInformations = mountsInformations;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockContentInformations(output);
    }

    public serializeAs_PaddockContentInformations(output: ICustomDataOutput)
    {
        super.serializeAs_PaddockInformations(output);
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element paddockId.");
        }
        output.writeDouble(this.paddockId);
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
        output.writeBoolean(this.abandonned);
        output.writeShort(this.mountsInformations.length);
        for(var _i7: number = 0; _i7 < this.mountsInformations.length; _i7++)
        {
            (this.mountsInformations[_i7] as MountInformationsForPaddock).serializeAs_MountInformationsForPaddock(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockContentInformations(input);
    }

    private deserializeAs_PaddockContentInformations(input: ICustomDataInput)
    {
        let _item7: MountInformationsForPaddock;
        super.deserialize(input);
        this._paddockIdFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
        this._abandonnedFunc(input);
        let _mountsInformationsLen: number = input.readUnsignedShort();
        for(let _i7: number = 0; _i7 < _mountsInformationsLen; _i7++)
        {
            _item7 = new MountInformationsForPaddock();
            _item7.deserialize(input);
            this.mountsInformations.push(_item7);
        }
    }

    private _paddockIdFunc(input: ICustomDataInput)
    {
        this.paddockId = input.readDouble();
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element of PaddockContentInformations.paddockId.");
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of PaddockContentInformations.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PaddockContentInformations.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of PaddockContentInformations.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of PaddockContentInformations.subAreaId.");
        }
    }

    private _abandonnedFunc(input: ICustomDataInput)
    {
        this.abandonned = input.readBoolean();
    }

}