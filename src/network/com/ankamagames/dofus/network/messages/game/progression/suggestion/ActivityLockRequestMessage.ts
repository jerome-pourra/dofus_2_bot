import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivityLockRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5738;

	public activityId: number = 0;
	public lock: boolean = false;

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