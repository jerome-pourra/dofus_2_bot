import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachRoomUnlockRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5483;

	public roomId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachRoomUnlockRequestMessage.protocolId;
    }

    public initBreachRoomUnlockRequestMessage(roomId: number = 0): BreachRoomUnlockRequestMessage
    {
        this.roomId = roomId;
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
        this.serializeAs_BreachRoomUnlockRequestMessage(output);
    }

    public serializeAs_BreachRoomUnlockRequestMessage(output: ICustomDataOutput)
    {
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element roomId.");
        }
        output.writeByte(this.roomId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachRoomUnlockRequestMessage(input);
    }

    private deserializeAs_BreachRoomUnlockRequestMessage(input: ICustomDataInput)
    {
        this._roomIdFunc(input);
    }

    private _roomIdFunc(input: ICustomDataInput)
    {
        this.roomId = input.readByte();
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element of BreachRoomUnlockRequestMessage.roomId.");
        }
    }

}