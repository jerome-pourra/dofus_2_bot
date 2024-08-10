import { AcquaintanceInformation } from "./../../../types/game/friend/AcquaintanceInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintanceAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2270;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public acquaintanceAdded: AcquaintanceInformation;

    public constructor()
    {
        super();
        this.acquaintanceAdded = new AcquaintanceInformation();
    }

    public getMessageId()
    {
        return AcquaintanceAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AcquaintanceAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AcquaintanceAddedMessage.endpointServer;
    }

    public initAcquaintanceAddedMessage(acquaintanceAdded: AcquaintanceInformation = null): AcquaintanceAddedMessage
    {
        this.acquaintanceAdded = acquaintanceAdded;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AcquaintanceAddedMessage(output);
    }

    public serializeAs_AcquaintanceAddedMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.acquaintanceAdded.getTypeId());
        this.acquaintanceAdded.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceAddedMessage(input);
    }

    private deserializeAs_AcquaintanceAddedMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.acquaintanceAdded = ProtocolTypeManager.getInstance(AcquaintanceInformation,_id1);
        this.acquaintanceAdded.deserialize(input);
    }

}