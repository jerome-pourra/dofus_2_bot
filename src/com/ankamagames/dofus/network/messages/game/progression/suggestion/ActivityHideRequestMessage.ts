import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ActivityHideRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5903;

	public activityId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ActivityHideRequestMessage.protocolId;
    }

    public initActivityHideRequestMessage(activityId: number = 0): ActivityHideRequestMessage
    {
        this.activityId = activityId;
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
        this.serializeAs_ActivityHideRequestMessage(output);
    }

    public serializeAs_ActivityHideRequestMessage(output: ICustomDataOutput)
    {
        if(this.activityId < 0)
        {
            throw new Error("Forbidden value (" + this.activityId + ") on element activityId.");
        }
        output.writeVarShort(this.activityId);
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