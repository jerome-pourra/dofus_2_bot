import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class PartyMemberGeoPosition implements INetworkType
{

	public static readonly protocolId: number = 5313;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public memberId: number = 0;
	public worldX: number = 0;
	public worldY: number = 0;
	public mapId: number = 0;
	public subAreaId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return PartyMemberGeoPosition.protocolId;
    }

    public isEndpointClient()
    {
        return PartyMemberGeoPosition.endpointClient;
    }

    public isEndpointServer()
    {
        return PartyMemberGeoPosition.endpointServer;
    }

    public initPartyMemberGeoPosition(memberId: number = 0, worldX: number = 0, worldY: number = 0, mapId: number = 0, subAreaId: number = 0): PartyMemberGeoPosition
    {
        this.memberId = memberId;
        this.worldX = worldX;
        this.worldY = worldY;
        this.mapId = mapId;
        this.subAreaId = subAreaId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PartyMemberGeoPosition(output);
    }

    public serializeAs_PartyMemberGeoPosition(output: ICustomDataOutput)
    {
        if(this.memberId < 0)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeInt(this.memberId);
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
        this.deserializeAs_PartyMemberGeoPosition(input);
    }

    private deserializeAs_PartyMemberGeoPosition(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._mapIdFunc(input);
        this._subAreaIdFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readInt();
        if(this.memberId < 0)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of PartyMemberGeoPosition.memberId.");
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of PartyMemberGeoPosition.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PartyMemberGeoPosition.worldY.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of PartyMemberGeoPosition.mapId.");
        }
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of PartyMemberGeoPosition.subAreaId.");
        }
    }

}