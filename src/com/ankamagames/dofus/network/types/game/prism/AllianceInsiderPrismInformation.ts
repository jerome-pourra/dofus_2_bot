import { ObjectItem } from "./../data/items/ObjectItem";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PrismInformation } from "./PrismInformation";

export class AllianceInsiderPrismInformation extends PrismInformation implements INetworkType
{

	public static readonly protocolId: number = 7229;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public getTypeId()
    {
        return AllianceInsiderPrismInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceInsiderPrismInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceInsiderPrismInformation.endpointServer;
    }

    public initAllianceInsiderPrismInformation(state: number = 1, placementDate: number = 0, nuggetsCount: number = 0, durability: number = 0, nextEvolutionDate: number = 0, moduleObject: ObjectItem = null, moduleType: number = -1, cristalObject: ObjectItem = null, cristalType: number = -1, cristalNumberLeft: number = 0): AllianceInsiderPrismInformation
    {
        super.initPrismInformation(state,placementDate,nuggetsCount,durability,nextEvolutionDate);
        this.moduleObject = moduleObject;
        this.moduleType = moduleType;
        this.cristalObject = cristalObject;
        this.cristalType = cristalType;
        this.cristalNumberLeft = cristalNumberLeft;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceInsiderPrismInformation(output);
    }

    public serializeAs_AllianceInsiderPrismInformation(output: ICustomDataOutput)
    {
        super.serializeAs_PrismInformation(output);
        this.moduleObject.serializeAs_ObjectItem(output);
        output.writeInt(this.moduleType);
        this.cristalObject.serializeAs_ObjectItem(output);
        output.writeInt(this.cristalType);
        if(this.cristalNumberLeft < 0)
        {
            throw new Error("Forbidden value (" + this.cristalNumberLeft + ") on element cristalNumberLeft.");
        }
        output.writeInt(this.cristalNumberLeft);
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