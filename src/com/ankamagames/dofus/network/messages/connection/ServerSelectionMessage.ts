import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ServerSelectionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4134;

	public serverId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ServerSelectionMessage.protocolId;
    }

    public initServerSelectionMessage(serverId: number = 0): ServerSelectionMessage
    {
        this.serverId = serverId;
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
        this.serializeAs_ServerSelectionMessage(output);
    }

    public serializeAs_ServerSelectionMessage(output: ICustomDataOutput)
    {
        if(this.serverId < 0)
        {
            throw new Error("Forbidden value (" + this.serverId + ") on element serverId.");
        }
        output.writeVarShort(this.serverId);
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