import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicAckMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9375;

	public seq: number = 0;
	public lastPacketId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicAckMessage(input);
    }

    private deserializeAs_BasicAckMessage(input: ICustomDataInput)
    {
        this._seqFunc(input);
        this._lastPacketIdFunc(input);
    }

    private _seqFunc(input: ICustomDataInput)
    {
        this.seq = input.readVarUhInt();
        if(this.seq < 0)
        {
            throw new Error("Forbidden value (" + this.seq + ") on element of BasicAckMessage.seq.");
        }
    }

    private _lastPacketIdFunc(input: ICustomDataInput)
    {
        this.lastPacketId = input.readVarUhShort();
        if(this.lastPacketId < 0)
        {
            throw new Error("Forbidden value (" + this.lastPacketId + ") on element of BasicAckMessage.lastPacketId.");
        }
    }

}