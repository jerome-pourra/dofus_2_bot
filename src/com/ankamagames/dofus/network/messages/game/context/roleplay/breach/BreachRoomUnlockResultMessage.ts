import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachRoomUnlockResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7028;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public roomId: number = 0;
	public result: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachRoomUnlockResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachRoomUnlockResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachRoomUnlockResultMessage.endpointServer;
    }

    public initBreachRoomUnlockResultMessage(roomId: number = 0, result: number = 0): BreachRoomUnlockResultMessage
    {
        this.roomId = roomId;
        this.result = result;
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
        this.serializeAs_BreachRoomUnlockResultMessage(output);
    }

    public serializeAs_BreachRoomUnlockResultMessage(output: ICustomDataOutput)
    {
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element roomId.");
        }
        output.writeByte(this.roomId);
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachRoomUnlockResultMessage(input);
    }

    private deserializeAs_BreachRoomUnlockResultMessage(input: ICustomDataInput)
    {
        this._roomIdFunc(input);
        this._resultFunc(input);
    }

    private _roomIdFunc(input: ICustomDataInput)
    {
        this.roomId = input.readByte();
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element of BreachRoomUnlockResultMessage.roomId.");
        }
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of BreachRoomUnlockResultMessage.result.");
        }
    }

}