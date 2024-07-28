import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivityHideRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5903;

	public activityId: number = 0;

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
        this.deserializeAs_ActivityHideRequestMessage(input);
    }

    private deserializeAs_ActivityHideRequestMessage(input: ICustomDataInput)
    {
        this._activityIdFunc(input);
    }

    private _activityIdFunc(input: ICustomDataInput)
    {
        this.activityId = input.readVarUhShort();
        if(this.activityId < 0)
        {
            throw new Error("Forbidden value (" + this.activityId + ") on element of ActivityHideRequestMessage.activityId.");
        }
    }

}