import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GuidedModeQuitRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6433;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuidedModeQuitRequestMessage.protocolId;
    }

    public initGuidedModeQuitRequestMessage(): GuidedModeQuitRequestMessage
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
        this.serializeAs_GuidedModeQuitRequestMessage(output);
    }

    public serializeAs_GuidedModeQuitRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuidedModeQuitRequestMessage(input);
    }

    private deserializeAs_GuidedModeQuitRequestMessage(input: ICustomDataInput)
    {

    }

}