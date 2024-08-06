import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountUnSetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8582;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountUnSetMessage.protocolId;
    }

    public initMountUnSetMessage(): MountUnSetMessage
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
        this.serializeAs_MountUnSetMessage(output);
    }

    public serializeAs_MountUnSetMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountUnSetMessage(input);
    }

    private deserializeAs_MountUnSetMessage(input: ICustomDataInput)
    {

    }

}