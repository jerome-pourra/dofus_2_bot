import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightLootObject implements INetworkType
{

	public static readonly protocolId: number = 5840;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectId: number = 0;
	public quantity: number = 0;
	public priorityHint: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return FightLootObject.protocolId;
    }

    public isEndpointClient()
    {
        return FightLootObject.endpointClient;
    }

    public isEndpointServer()
    {
        return FightLootObject.endpointServer;
    }

    public initFightLootObject(objectId: number = 0, quantity: number = 0, priorityHint: number = 0): FightLootObject
    {
        this.objectId = objectId;
        this.quantity = quantity;
        this.priorityHint = priorityHint;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightLootObject(output);
    }

    public serializeAs_FightLootObject(output: ICustomDataOutput)
    {
        output.writeInt(this.objectId);
        output.writeInt(this.quantity);
        output.writeInt(this.priorityHint);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightLootObject(input);
    }

    private deserializeAs_FightLootObject(input: ICustomDataInput)
    {
        this._objectIdFunc(input);
        this._quantityFunc(input);
        this._priorityHintFunc(input);
    }

    private _objectIdFunc(input: ICustomDataInput)
    {
        this.objectId = input.readInt();
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readInt();
    }

    private _priorityHintFunc(input: ICustomDataInput)
    {
        this.priorityHint = input.readInt();
    }

}