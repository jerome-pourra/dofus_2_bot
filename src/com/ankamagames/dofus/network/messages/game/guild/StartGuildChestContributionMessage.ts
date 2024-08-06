import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StartGuildChestContributionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9862;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StartGuildChestContributionMessage.protocolId;
    }

    public initStartGuildChestContributionMessage(): StartGuildChestContributionMessage
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
        this.serializeAs_StartGuildChestContributionMessage(output);
    }

    public serializeAs_StartGuildChestContributionMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StartGuildChestContributionMessage(input);
    }

    private deserializeAs_StartGuildChestContributionMessage(input: ICustomDataInput)
    {

    }

}