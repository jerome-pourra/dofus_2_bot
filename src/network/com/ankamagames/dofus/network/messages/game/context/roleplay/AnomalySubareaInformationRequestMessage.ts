import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AnomalySubareaInformationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7452;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AnomalySubareaInformationRequestMessage.protocolId;
    }

    public initAnomalySubareaInformationRequestMessage(): AnomalySubareaInformationRequestMessage
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
        this.serializeAs_AnomalySubareaInformationRequestMessage(output);
    }

    public serializeAs_AnomalySubareaInformationRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AnomalySubareaInformationRequestMessage(input);
    }

    private deserializeAs_AnomalySubareaInformationRequestMessage(input: ICustomDataInput)
    {

    }

}