import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class CheckIntegrityMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7220;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public data: Array<number>;

    public constructor()
    {
        super();
        this.data = Array<number>();
    }

    public getMessageId()
    {
        return CheckIntegrityMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CheckIntegrityMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CheckIntegrityMessage.endpointServer;
    }

    public initCheckIntegrityMessage(data: Array<number> = null): CheckIntegrityMessage
    {
        this.data = data;
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
        this.serializeAs_CheckIntegrityMessage(output);
    }

    public serializeAs_CheckIntegrityMessage(output: ICustomDataOutput)
    {
        output.writeVarInt(this.data.length);
        for(var _i1: number = 0; _i1 < this.data.length; _i1++)
        {
            output.writeByte(this.data[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CheckIntegrityMessage(input);
    }

    private deserializeAs_CheckIntegrityMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _dataLen: number = input.readVarInt();
        for(let _i1: number = 0; _i1 < _dataLen; _i1++)
        {
            _val1 = input.readByte();
            this.data.push(_val1);
        }
    }

}