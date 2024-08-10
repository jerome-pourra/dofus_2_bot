import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ConsoleMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7923;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public type: number = 0;
	public content: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ConsoleMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ConsoleMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ConsoleMessage.endpointServer;
    }

    public initConsoleMessage(type: number = 0, content: string = ""): ConsoleMessage
    {
        this.type = type;
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
        this.serializeAs_ConsoleMessage(output);
    }

    public serializeAs_ConsoleMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.type);
        output.writeUTF(this.content);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConsoleMessage(input);
    }

    private deserializeAs_ConsoleMessage(input: ICustomDataInput)
    {
        this._typeFunc(input);
        this._contentFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of ConsoleMessage.type.");
        }
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}