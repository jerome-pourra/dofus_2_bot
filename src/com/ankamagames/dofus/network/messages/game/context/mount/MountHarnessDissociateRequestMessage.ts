import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountHarnessDissociateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7150;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountHarnessDissociateRequestMessage.protocolId;
    }

    public initMountHarnessDissociateRequestMessage(): MountHarnessDissociateRequestMessage
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
        this.serializeAs_MountHarnessDissociateRequestMessage(output);
    }

    public serializeAs_MountHarnessDissociateRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MountHarnessDissociateRequestMessage(input);
    }

    private deserializeAs_MountHarnessDissociateRequestMessage(input: ICustomDataInput)
    {

    }

}