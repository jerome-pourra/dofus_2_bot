import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class SelectedServerRefusedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 277;

	public serverId: number = 0;
	public error: number = 1;
	public serverStatus: number = 1;

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