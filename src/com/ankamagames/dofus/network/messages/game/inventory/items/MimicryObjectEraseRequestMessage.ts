import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MimicryObjectEraseRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7124;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public hostUID: number = 0;
	public hostPos: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MimicryObjectEraseRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MimicryObjectEraseRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MimicryObjectEraseRequestMessage.endpointServer;
    }

    public initMimicryObjectEraseRequestMessage(hostUID: number = 0, hostPos: number = 0): MimicryObjectEraseRequestMessage
    {
        this.hostUID = hostUID;
        this.hostPos = hostPos;
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
        this.serializeAs_MimicryObjectEraseRequestMessage(output);
    }

    public serializeAs_MimicryObjectEraseRequestMessage(output: ICustomDataOutput)
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