import { BreachReward } from "./../../../../../../types/game/context/roleplay/breach/BreachReward";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachRewardsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1741;

	public rewards: Array<BreachReward>;

    public constructor()
    {
        super();
        this.rewards = Array<BreachReward>();
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
        this.deserializeAs_BreachRewardsMessage(input);
    }

    private deserializeAs_BreachRewardsMessage(input: ICustomDataInput)
    {
        let _item1: BreachReward;
        let _rewardsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _rewardsLen; _i1++)
        {
            _item1 = new BreachReward();
            _item1.deserialize(input);
            this.rewards.push(_item1);
        }
    }

}