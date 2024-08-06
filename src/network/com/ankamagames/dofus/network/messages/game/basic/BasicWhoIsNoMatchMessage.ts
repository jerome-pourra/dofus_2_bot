import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicWhoIsNoMatchMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4629;

	public target: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return BasicWhoIsNoMatchMessage.protocolId;
    }

    public initBasicWhoIsNoMatchMessage(target: AbstractPlayerSearchInformation = null): BasicWhoIsNoMatchMessage
    {
        this.target = target;
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
        this.serializeAs_BasicWhoIsNoMatchMessage(output);
    }

    public serializeAs_BasicWhoIsNoMatchMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.target.getTypeId());
        this.target.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicWhoIsNoMatchMessage(input);
    }

    private deserializeAs_BasicWhoIsNoMatchMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.target.deserialize(input);
    }

}