import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { LockableStateUpdateAbstractMessage } from "./LockableStateUpdateAbstractMessage";

export class LockableStateUpdateHouseDoorMessage extends LockableStateUpdateAbstractMessage
{

	public static readonly protocolId: number = 7692;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LockableStateUpdateHouseDoorMessage(input);
    }

    private deserializeAs_LockableStateUpdateHouseDoorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of LockableStateUpdateHouseDoorMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of LockableStateUpdateHouseDoorMessage.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

}