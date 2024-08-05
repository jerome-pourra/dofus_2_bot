import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightLootObject
{

	public static readonly protocolId: number = 5840;

	public objectId: number = 0;
	public quantity: number = 0;
	public priorityHint: number = 0;

    public constructor()
    {

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