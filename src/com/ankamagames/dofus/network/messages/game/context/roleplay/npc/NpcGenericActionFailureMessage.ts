import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcGenericActionFailureMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5877;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NpcGenericActionFailureMessage.protocolId;
    }

    public initNpcGenericActionFailureMessage(): NpcGenericActionFailureMessage
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
        this.serializeAs_NpcGenericActionFailureMessage(output);
    }

    public serializeAs_NpcGenericActionFailureMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NpcGenericActionFailureMessage(input);
    }

    private deserializeAs_NpcGenericActionFailureMessage(input: ICustomDataInput)
    {

    }

}