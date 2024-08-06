import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StopGuildChestContributionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1053;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StopGuildChestContributionMessage.protocolId;
    }

    public initStopGuildChestContributionMessage(): StopGuildChestContributionMessage
    {
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
        this.serializeAs_StopGuildChestContributionMessage(output);
    }

    public serializeAs_StopGuildChestContributionMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StopGuildChestContributionMessage(input);
    }

    private deserializeAs_StopGuildChestContributionMessage(input: ICustomDataInput)
    {

    }

}