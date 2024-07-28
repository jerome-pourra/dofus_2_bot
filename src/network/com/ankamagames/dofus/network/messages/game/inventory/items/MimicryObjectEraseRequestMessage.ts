import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MimicryObjectEraseRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7124;

	public hostUID: number = 0;
	public hostPos: number = 0;

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
        this.deserializeAs_MimicryObjectEraseRequestMessage(input);
    }

    private deserializeAs_MimicryObjectEraseRequestMessage(input: ICustomDataInput)
    {
        this._hostUIDFunc(input);
        this._hostPosFunc(input);
    }

    private _hostUIDFunc(input: ICustomDataInput)
    {
        this.hostUID = input.readVarUhInt();
        if(this.hostUID < 0)
        {
            throw new Error("Forbidden value (" + this.hostUID + ") on element of MimicryObjectEraseRequestMessage.hostUID.");
        }
    }

    private _hostPosFunc(input: ICustomDataInput)
    {
        this.hostPos = input.readUnsignedByte();
        if(this.hostPos < 0 || this.hostPos > 255)
        {
            throw new Error("Forbidden value (" + this.hostPos + ") on element of MimicryObjectEraseRequestMessage.hostPos.");
        }
    }

}