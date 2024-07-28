import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { HouseInstanceInformations } from "./HouseInstanceInformations";
import { HouseInformations } from "./HouseInformations";

export class HouseInformationsInside extends HouseInformations
{

	public static readonly protocolId: number = 2801;

	public houseInfos: HouseInstanceInformations;
	public worldX: number = 0;
	public worldY: number = 0;

    public constructor()
    {
        super();
        this.houseInfos = new HouseInstanceInformations();
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