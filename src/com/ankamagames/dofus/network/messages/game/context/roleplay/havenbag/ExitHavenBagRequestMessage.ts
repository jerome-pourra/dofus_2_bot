import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ExitHavenBagRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1472;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExitHavenBagRequestMessage.protocolId;
    }

    public initExitHavenBagRequestMessage(): ExitHavenBagRequestMessage
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
        this.serializeAs_ExitHavenBagRequestMessage(output);
    }

    public serializeAs_ExitHavenBagRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExitHavenBagRequestMessage(input);
    }

    private deserializeAs_ExitHavenBagRequestMessage(input: ICustomDataInput)
    {

    }

}