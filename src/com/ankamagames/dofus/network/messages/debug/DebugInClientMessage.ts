import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class DebugInClientMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6256;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public level: number = 0;
	public message: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DebugInClientMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DebugInClientMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DebugInClientMessage.endpointServer;
    }

    public initDebugInClientMessage(level: number = 0, message: string = ""): DebugInClientMessage
    {
        this.level = level;
        this.message = message;
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
        this.serializeAs_DebugInClientMessage(output);
    }

    public serializeAs_DebugInClientMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.level);
        output.writeUTF(this.message);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DebugInClientMessage(input);
    }

    private deserializeAs_DebugInClientMessage(input: ICustomDataInput)
    {
        this._levelFunc(input);
        this._messageFunc(input);
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readByte();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of DebugInClientMessage.level.");
        }
    }

    private _messageFunc(input: ICustomDataInput)
    {
        this.message = input.readUTF();
    }

}