import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ResetCharacterStatsRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7045;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ResetCharacterStatsRequestMessage.protocolId;
    }

    public initResetCharacterStatsRequestMessage(): ResetCharacterStatsRequestMessage
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
        this.serializeAs_ResetCharacterStatsRequestMessage(output);
    }

    public serializeAs_ResetCharacterStatsRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ResetCharacterStatsRequestMessage(input);
    }

    private deserializeAs_ResetCharacterStatsRequestMessage(input: ICustomDataInput)
    {

    }

}