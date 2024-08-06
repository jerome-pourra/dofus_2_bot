import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4672;

	public prism: PrismGeolocalizedInformation;

    public constructor()
    {
        super();
        this.prism = new PrismGeolocalizedInformation();
    }

    public getMessageId()
    {
        return PrismRemoveMessage.protocolId;
    }

    public initPrismRemoveMessage(prism: PrismGeolocalizedInformation = null): PrismRemoveMessage
    {
        this.prism = prism;
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
        this.serializeAs_PrismRemoveMessage(output);
    }

    public serializeAs_PrismRemoveMessage(output: ICustomDataOutput)
    {
        this.prism.serializeAs_PrismGeolocalizedInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismRemoveMessage(input);
    }

    private deserializeAs_PrismRemoveMessage(input: ICustomDataInput)
    {
        this.prism = new PrismGeolocalizedInformation();
        this.prism.deserialize(input);
    }

}