import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class RawDataMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6253;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public content: Buffer;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return RawDataMessage.protocolId;
    }

    public isEndpointClient()
    {
        return RawDataMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return RawDataMessage.endpointServer;
    }

    public initRawDataMessage(content: Buffer = null): RawDataMessage
    {
        this.content = content;
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
        this.serializeAs_RawDataMessage(output);
    }

    public serializeAs_RawDataMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.content.length);
        for(var _i1: number = 0; _i1 < this.content.length; _i1++)
        {
            output.writeByte(this.content[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RawDataMessage(input);
    }

    private deserializeAs_RawDataMessage(input: ICustomDataInput)
    {
        let _contentLen: number = input.readVarInt();
        input.readBytes(this.content,0,_contentLen);
    }

}