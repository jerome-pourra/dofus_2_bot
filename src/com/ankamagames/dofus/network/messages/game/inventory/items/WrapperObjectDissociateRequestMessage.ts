import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class WrapperObjectDissociateRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5244;

	public hostUID: number = 0;
	public hostPos: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return WrapperObjectDissociateRequestMessage.protocolId;
    }

    public initWrapperObjectDissociateRequestMessage(hostUID: number = 0, hostPos: number = 0): WrapperObjectDissociateRequestMessage
    {
        this.hostUID = hostUID;
        this.hostPos = hostPos;
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
        this.serializeAs_WrapperObjectDissociateRequestMessage(output);
    }

    public serializeAs_WrapperObjectDissociateRequestMessage(output: ICustomDataOutput)
    {
        if(this.hostUID < 0)
        {
            throw new Error("Forbidden value (" + this.hostUID + ") on element hostUID.");
        }
        output.writeVarInt(this.hostUID);
        if(this.hostPos < 0 || this.hostPos > 255)
        {
            throw new Error("Forbidden value (" + this.hostPos + ") on element hostPos.");
        }
        output.writeByte(this.hostPos);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_WrapperObjectDissociateRequestMessage(input);
    }

    private deserializeAs_WrapperObjectDissociateRequestMessage(input: ICustomDataInput)
    {
        this._hostUIDFunc(input);
        this._hostPosFunc(input);
    }

    private _hostUIDFunc(input: ICustomDataInput)
    {
        this.hostUID = input.readVarUhInt();
        if(this.hostUID < 0)
        {
            throw new Error("Forbidden value (" + this.hostUID + ") on element of WrapperObjectDissociateRequestMessage.hostUID.");
        }
    }

    private _hostPosFunc(input: ICustomDataInput)
    {
        this.hostPos = input.readUnsignedByte();
        if(this.hostPos < 0 || this.hostPos > 255)
        {
            throw new Error("Forbidden value (" + this.hostPos + ") on element of WrapperObjectDissociateRequestMessage.hostPos.");
        }
    }

}