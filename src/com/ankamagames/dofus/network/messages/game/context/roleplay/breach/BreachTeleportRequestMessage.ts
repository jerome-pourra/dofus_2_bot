import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachTeleportRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2317;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachTeleportRequestMessage.protocolId;
    }

    public initBreachTeleportRequestMessage(): BreachTeleportRequestMessage
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
        this.serializeAs_BreachTeleportRequestMessage(output);
    }

    public serializeAs_BreachTeleportRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachTeleportRequestMessage(input);
    }

    private deserializeAs_BreachTeleportRequestMessage(input: ICustomDataInput)
    {

    }

}