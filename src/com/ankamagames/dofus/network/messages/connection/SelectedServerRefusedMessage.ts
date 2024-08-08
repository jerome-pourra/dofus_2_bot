import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class SelectedServerRefusedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 277;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public serverId: number = 0;
	public error: number = 1;
	public serverStatus: number = 1;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SelectedServerRefusedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return SelectedServerRefusedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return SelectedServerRefusedMessage.endpointServer;
    }

    public initSelectedServerRefusedMessage(serverId: number = 0, error: number = 1, serverStatus: number = 1): SelectedServerRefusedMessage
    {
        this.serverId = serverId;
        this.error = error;
        this.serverStatus = serverStatus;
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
        this.serializeAs_SelectedServerRefusedMessage(output);
    }

    public serializeAs_SelectedServerRefusedMessage(output: ICustomDataOutput)
    {
        if(this.serverId < 0)
        {
            throw new Error("Forbidden value (" + this.serverId + ") on element serverId.");
        }
        output.writeVarShort(this.serverId);
        output.writeByte(this.error);
        output.writeByte(this.serverStatus);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SelectedServerRefusedMessage(input);
    }

    private deserializeAs_SelectedServerRefusedMessage(input: ICustomDataInput)
    {
        this._serverIdFunc(input);
        this._errorFunc(input);
        this._serverStatusFunc(input);
    }

    private _serverIdFunc(input: ICustomDataInput)
    {
        this.serverId = input.readVarUhShort();
        if(this.serverId < 0)
        {
            throw new Error("Forbidden value (" + this.serverId + ") on element of SelectedServerRefusedMessage.serverId.");
        }
    }

    private _errorFunc(input: ICustomDataInput)
    {
        this.error = input.readByte();
        if(this.error < 0)
        {
            throw new Error("Forbidden value (" + this.error + ") on element of SelectedServerRefusedMessage.error.");
        }
    }

    private _serverStatusFunc(input: ICustomDataInput)
    {
        this.serverStatus = input.readByte();
        if(this.serverStatus < 0)
        {
            throw new Error("Forbidden value (" + this.serverStatus + ") on element of SelectedServerRefusedMessage.serverStatus.");
        }
    }

}