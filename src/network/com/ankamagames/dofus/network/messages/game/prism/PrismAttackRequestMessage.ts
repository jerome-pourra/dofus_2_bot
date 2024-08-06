import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismAttackRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6412;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PrismAttackRequestMessage.protocolId;
    }

    public initPrismAttackRequestMessage(): PrismAttackRequestMessage
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
        this.serializeAs_PrismAttackRequestMessage(output);
    }

    public serializeAs_PrismAttackRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismAttackRequestMessage(input);
    }

    private deserializeAs_PrismAttackRequestMessage(input: ICustomDataInput)
    {

    }

}