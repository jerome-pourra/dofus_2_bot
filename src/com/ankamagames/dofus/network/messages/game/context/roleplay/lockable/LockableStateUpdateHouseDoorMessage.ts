import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { LockableStateUpdateAbstractMessage } from "./LockableStateUpdateAbstractMessage";

export class LockableStateUpdateHouseDoorMessage extends LockableStateUpdateAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7692;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LockableStateUpdateHouseDoorMessage.protocolId;
    }

    public initLockableStateUpdateHouseDoorMessage(locked: boolean = false, houseId: number = 0, instanceId: number = 0, secondHand: boolean = false): LockableStateUpdateHouseDoorMessage
    {
        super.initLockableStateUpdateAbstractMessage(locked);
        this.houseId = houseId;
        this.instanceId = instanceId;
        this.secondHand = secondHand;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_LockableStateUpdateHouseDoorMessage(output);
    }

    public serializeAs_LockableStateUpdateHouseDoorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_LockableStateUpdateAbstractMessage(output);
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
        }
        output.writeVarInt(this.houseId);
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element instanceId.");
        }
        output.writeInt(this.instanceId);
        output.writeBoolean(this.secondHand);
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