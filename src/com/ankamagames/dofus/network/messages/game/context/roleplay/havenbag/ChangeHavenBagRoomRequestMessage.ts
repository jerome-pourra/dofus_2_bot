import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChangeHavenBagRoomRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 980;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public roomId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChangeHavenBagRoomRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChangeHavenBagRoomRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChangeHavenBagRoomRequestMessage.endpointServer;
    }

    public initChangeHavenBagRoomRequestMessage(roomId: number = 0): ChangeHavenBagRoomRequestMessage
    {
        this.roomId = roomId;
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
        this.serializeAs_ChangeHavenBagRoomRequestMessage(output);
    }

    public serializeAs_ChangeHavenBagRoomRequestMessage(output: ICustomDataOutput)
    {
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element roomId.");
        }
        output.writeByte(this.roomId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChangeHavenBagRoomRequestMessage(input);
    }

    private deserializeAs_ChangeHavenBagRoomRequestMessage(input: ICustomDataInput)
    {
        this._roomIdFunc(input);
    }

    private _roomIdFunc(input: ICustomDataInput)
    {
        this.roomId = input.readByte();
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element of ChangeHavenBagRoomRequestMessage.roomId.");
        }
    }

}