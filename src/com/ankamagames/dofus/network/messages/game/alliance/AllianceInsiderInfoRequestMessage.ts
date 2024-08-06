import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInsiderInfoRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2763;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceInsiderInfoRequestMessage.protocolId;
    }

    public initAllianceInsiderInfoRequestMessage(): AllianceInsiderInfoRequestMessage
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
        this.serializeAs_AllianceInsiderInfoRequestMessage(output);
    }

    public serializeAs_AllianceInsiderInfoRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceInsiderInfoRequestMessage(input);
    }

    private deserializeAs_AllianceInsiderInfoRequestMessage(input: ICustomDataInput)
    {

    }

}