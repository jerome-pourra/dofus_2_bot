import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountToggleRidingRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1106;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountToggleRidingRequestMessage.protocolId;
    }

    public initMountToggleRidingRequestMessage(): MountToggleRidingRequestMessage
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
        this.serializeAs_MountToggleRidingRequestMessage(output);
    }

    public serializeAs_MountToggleRidingRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountToggleRidingRequestMessage(input);
    }

    private deserializeAs_MountToggleRidingRequestMessage(input: ICustomDataInput)
    {

    }

}