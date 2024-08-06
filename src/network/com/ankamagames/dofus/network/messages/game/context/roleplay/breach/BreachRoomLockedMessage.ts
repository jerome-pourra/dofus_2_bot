import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachRoomLockedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8241;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachRoomLockedMessage.protocolId;
    }

    public initBreachRoomLockedMessage(): BreachRoomLockedMessage
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
        this.serializeAs_BreachRoomLockedMessage(output);
    }

    public serializeAs_BreachRoomLockedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachRoomLockedMessage(input);
    }

    private deserializeAs_BreachRoomLockedMessage(input: ICustomDataInput)
    {

    }

}