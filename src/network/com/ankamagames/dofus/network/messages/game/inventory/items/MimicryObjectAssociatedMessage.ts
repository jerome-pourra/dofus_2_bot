import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { SymbioticObjectAssociatedMessage } from "./SymbioticObjectAssociatedMessage";

export class MimicryObjectAssociatedMessage extends SymbioticObjectAssociatedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1127;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MimicryObjectAssociatedMessage.protocolId;
    }

    public initMimicryObjectAssociatedMessage(hostUID: number = 0): MimicryObjectAssociatedMessage
    {
        super.initSymbioticObjectAssociatedMessage(hostUID);
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
        this.serializeAs_MimicryObjectAssociatedMessage(output);
    }

    public serializeAs_MimicryObjectAssociatedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SymbioticObjectAssociatedMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MimicryObjectAssociatedMessage(input);
    }

    private deserializeAs_MimicryObjectAssociatedMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}