import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicLatencyStatsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6273;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicLatencyStatsRequestMessage.protocolId;
    }

    public initBasicLatencyStatsRequestMessage(): BasicLatencyStatsRequestMessage
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
        this.serializeAs_BasicLatencyStatsRequestMessage(output);
    }

    public serializeAs_BasicLatencyStatsRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicLatencyStatsRequestMessage(input);
    }

    private deserializeAs_BasicLatencyStatsRequestMessage(input: ICustomDataInput)
    {

    }

}