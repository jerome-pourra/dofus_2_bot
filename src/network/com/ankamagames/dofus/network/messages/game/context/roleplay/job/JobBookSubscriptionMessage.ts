import { JobBookSubscription } from "./../../../../../types/game/context/roleplay/job/JobBookSubscription";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobBookSubscriptionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6723;

	public subscriptions: Array<JobBookSubscription>;

    public constructor()
    {
        super();
        this.subscriptions = Array<JobBookSubscription>();
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
        this.deserializeAs_JobBookSubscriptionMessage(input);
    }

    private deserializeAs_JobBookSubscriptionMessage(input: ICustomDataInput)
    {
        let _item1: JobBookSubscription;
        let _subscriptionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _subscriptionsLen; _i1++)
        {
            _item1 = new JobBookSubscription();
            _item1.deserialize(input);
            this.subscriptions.push(_item1);
        }
    }

}