import { BreachReward } from "./../../../../../../types/game/context/roleplay/breach/BreachReward";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachRewardsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1741;

	public rewards: Array<BreachReward>;

    public constructor()
    {
        super();
        this.rewards = Array<BreachReward>();
    }

    public getMessageId()
    {
        return BreachRewardsMessage.protocolId;
    }

    public initBreachRewardsMessage(rewards: Array<BreachReward> = null): BreachRewardsMessage
    {
        this.rewards = rewards;
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
        this.serializeAs_BreachRewardsMessage(output);
    }

    public serializeAs_BreachRewardsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.rewards.length);
        for(var _i1: number = 0; _i1 < this.rewards.length; _i1++)
        {
            (this.rewards[_i1] as BreachReward).serializeAs_BreachReward(output);
        }
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