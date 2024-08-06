import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivityLockRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5738;

	public activityId: number = 0;
	public lock: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ActivityLockRequestMessage.protocolId;
    }

    public initActivityLockRequestMessage(activityId: number = 0, lock: boolean = false): ActivityLockRequestMessage
    {
        this.activityId = activityId;
        this.lock = lock;
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
        this.serializeAs_ActivityLockRequestMessage(output);
    }

    public serializeAs_ActivityLockRequestMessage(output: ICustomDataOutput)
    {
        if(this.activityId < 0)
        {
            throw new Error("Forbidden value (" + this.activityId + ") on element activityId.");
        }
        output.writeVarShort(this.activityId);
        output.writeBoolean(this.lock);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ActivityLockRequestMessage(input);
    }

    private deserializeAs_ActivityLockRequestMessage(input: ICustomDataInput)
    {
        this._activityIdFunc(input);
        this._lockFunc(input);
    }

    private _activityIdFunc(input: ICustomDataInput)
    {
        this.activityId = input.readVarUhShort();
        if(this.activityId < 0)
        {
            throw new Error("Forbidden value (" + this.activityId + ") on element of ActivityLockRequestMessage.activityId.");
        }
    }

    private _lockFunc(input: ICustomDataInput)
    {
        this.lock = input.readBoolean();
    }

}