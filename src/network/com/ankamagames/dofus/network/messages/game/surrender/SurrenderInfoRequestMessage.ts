import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SurrenderInfoRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4015;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SurrenderInfoRequestMessage.protocolId;
    }

    public initSurrenderInfoRequestMessage(): SurrenderInfoRequestMessage
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
        this.serializeAs_SurrenderInfoRequestMessage(output);
    }

    public serializeAs_SurrenderInfoRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderInfoRequestMessage(input);
    }

    private deserializeAs_SurrenderInfoRequestMessage(input: ICustomDataInput)
    {

    }

}