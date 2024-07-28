import { ObjectItem } from "./../data/items/ObjectItem";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PrismInformation } from "./PrismInformation";

export class AllianceInsiderPrismInformation extends PrismInformation
{

	public static readonly protocolId: number = 7229;

	public moduleObject: ObjectItem;
	public moduleType: number;
	public cristalObject: ObjectItem;
	public cristalType: number;
	public cristalNumberLeft: number = 0;

    public constructor()
    {
        super();
        this.moduleObject = new ObjectItem();
        this.cristalObject = new ObjectItem();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceInsiderPrismInformation(input);
    }

    private deserializeAs_AllianceInsiderPrismInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.moduleObject = new ObjectItem();
        this.moduleObject.deserialize(input);
        this._moduleTypeFunc(input);
        this.cristalObject = new ObjectItem();
        this.cristalObject.deserialize(input);
        this._cristalTypeFunc(input);
        this._cristalNumberLeftFunc(input);
    }

    private _moduleTypeFunc(input: ICustomDataInput)
    {
        this.moduleType = input.readInt();
    }

    private _cristalTypeFunc(input: ICustomDataInput)
    {
        this.cristalType = input.readInt();
    }

    private _cristalNumberLeftFunc(input: ICustomDataInput)
    {
        this.cristalNumberLeft = input.readInt();
        if(this.cristalNumberLeft < 0)
        {
            throw new Error("Forbidden value (" + this.cristalNumberLeft + ") on element of AllianceInsiderPrismInformation.cristalNumberLeft.");
        }
    }

}