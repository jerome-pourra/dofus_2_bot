import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class SwitchArenaXpRewardsModeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4870;

	public xpRewards: boolean = false;

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
        this.deserializeAs_SwitchArenaXpRewardsModeMessage(input);
    }

    private deserializeAs_SwitchArenaXpRewardsModeMessage(input: ICustomDataInput)
    {
        this._xpRewardsFunc(input);
    }

    private _xpRewardsFunc(input: ICustomDataInput)
    {
        this.xpRewards = input.readBoolean();
    }

}