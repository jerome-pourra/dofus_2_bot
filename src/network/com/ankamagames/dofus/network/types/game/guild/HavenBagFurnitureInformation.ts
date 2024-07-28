import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class HavenBagFurnitureInformation
{

	public static readonly protocolId: number = 3250;

	public cellId: number = 0;
	public funitureId: number = 0;
	public orientation: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HavenBagFurnitureInformation(input);
    }

    private deserializeAs_HavenBagFurnitureInformation(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
        this._funitureIdFunc(input);
        this._orientationFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of HavenBagFurnitureInformation.cellId.");
        }
    }

    private _funitureIdFunc(input: ICustomDataInput)
    {
        this.funitureId = input.readInt();
    }

    private _orientationFunc(input: ICustomDataInput)
    {
        this.orientation = input.readByte();
        if(this.orientation < 0)
        {
            throw new Error("Forbidden value (" + this.orientation + ") on element of HavenBagFurnitureInformation.orientation.");
        }
    }

}