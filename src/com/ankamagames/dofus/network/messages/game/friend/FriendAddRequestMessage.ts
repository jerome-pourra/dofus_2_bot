import { AbstractPlayerSearchInformation } from "./../../../types/common/AbstractPlayerSearchInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendAddRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5713;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public target: AbstractPlayerSearchInformation;

    public constructor()
    {
        super();
        this.target = new AbstractPlayerSearchInformation();
    }

    public getMessageId()
    {
        return FriendAddRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendAddRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendAddRequestMessage.endpointServer;
    }

    public initFriendAddRequestMessage(target: AbstractPlayerSearchInformation = null): FriendAddRequestMessage
    {
        this.target = target;
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
        this.serializeAs_FriendAddRequestMessage(output);
    }

    public serializeAs_FriendAddRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.target.getTypeId());
        this.target.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendAddRequestMessage(input);
    }

    private deserializeAs_FriendAddRequestMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.target = ProtocolTypeManager.getInstance(AbstractPlayerSearchInformation,_id1);
        this.target.deserialize(input);
    }

}