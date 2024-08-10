import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendSetStatusShareMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5816;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public share: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return FriendSetStatusShareMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FriendSetStatusShareMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FriendSetStatusShareMessage.endpointServer;
    }

    public initFriendSetStatusShareMessage(share: boolean = false): FriendSetStatusShareMessage
    {
        this.share = share;
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
        this.serializeAs_FriendSetStatusShareMessage(output);
    }

    public serializeAs_FriendSetStatusShareMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.share);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FriendSetStatusShareMessage(input);
    }

    private deserializeAs_FriendSetStatusShareMessage(input: ICustomDataInput)
    {
        this._shareFunc(input);
    }

    private _shareFunc(input: ICustomDataInput)
    {
        this.share = input.readBoolean();
    }

}