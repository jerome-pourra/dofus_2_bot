import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ServerSelectionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4134;

	public serverId: number = 0;

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
        this.deserializeAs_ServerSelectionMessage(input);
    }

    private deserializeAs_ServerSelectionMessage(input: ICustomDataInput)
    {
        this._serverIdFunc(input);
    }

    private _serverIdFunc(input: ICustomDataInput)
    {
        this.serverId = input.readVarUhShort();
        if(this.serverId < 0)
        {
            throw new Error("Forbidden value (" + this.serverId + ") on element of ServerSelectionMessage.serverId.");
        }
    }

}