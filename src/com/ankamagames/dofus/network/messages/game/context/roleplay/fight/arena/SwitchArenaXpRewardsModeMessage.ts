import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class SwitchArenaXpRewardsModeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4870;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public xpRewards: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SwitchArenaXpRewardsModeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SwitchArenaXpRewardsModeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SwitchArenaXpRewardsModeMessage.endpointServer;
    }

    public initSwitchArenaXpRewardsModeMessage(xpRewards: boolean = false): SwitchArenaXpRewardsModeMessage
    {
        this.xpRewards = xpRewards;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SwitchArenaXpRewardsModeMessage(output);
    }

    public serializeAs_SwitchArenaXpRewardsModeMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.xpRewards);
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