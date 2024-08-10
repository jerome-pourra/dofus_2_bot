import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";
import { HouseInformations } from "./HouseInformations";

export class HouseInformationsInside extends HouseInformations implements INetworkType
{

	public static readonly protocolId: number = 2801;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public houseInfos: HouseInstanceInformations;
	public worldX: number = 0;
	public worldY: number = 0;

    public constructor()
    {
        super();
        this.houseInfos = new HouseInstanceInformations();
    }

    public getTypeId()
    {
        return HouseInformationsInside.protocolId;
    }

    public isEndpointClient()
    {
        return HouseInformationsInside.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseInformationsInside.endpointServer;
    }

    public initHouseInformationsInside(houseId: number = 0, modelId: number = 0, houseInfos: HouseInstanceInformations = null, worldX: number = 0, worldY: number = 0): HouseInformationsInside
    {
        super.initHouseInformations(houseId,modelId);
        this.houseInfos = houseInfos;
        this.worldX = worldX;
        this.worldY = worldY;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HouseInformationsInside(output);
    }

    public serializeAs_HouseInformationsInside(output: ICustomDataOutput)
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseInformationsInside(input);
    }

    private deserializeAs_HouseInformationsInside(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.houseInfos = ProtocolTypeManager.getInstance(HouseInstanceInformations,_id1);
        this.houseInfos.deserialize(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of HouseInformationsInside.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of HouseInformationsInside.worldY.");
        }
    }

}