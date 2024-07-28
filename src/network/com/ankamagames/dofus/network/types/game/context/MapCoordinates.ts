import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class MapCoordinates
{

	public static readonly protocolId: number = 315;

	public worldX: number = 0;
	public worldY: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapCoordinates(input);
    }

    private deserializeAs_MapCoordinates(input: ICustomDataInput)
    {
        this._worldXFunc(input);
        this._worldYFunc(input);
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of MapCoordinates.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of MapCoordinates.worldY.");
        }
    }

}