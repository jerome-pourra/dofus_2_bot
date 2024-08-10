import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildApplicationDeletedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8782;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public deleted: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildApplicationDeletedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildApplicationDeletedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildApplicationDeletedMessage.endpointServer;
    }

    public initGuildApplicationDeletedMessage(deleted: boolean = false): GuildApplicationDeletedMessage
    {
        this.deleted = deleted;
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
        this.serializeAs_GuildApplicationDeletedMessage(output);
    }

    public serializeAs_GuildApplicationDeletedMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.deleted);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildApplicationDeletedMessage(input);
    }

    private deserializeAs_GuildApplicationDeletedMessage(input: ICustomDataInput)
    {
        this._deletedFunc(input);
    }

    private _deletedFunc(input: ICustomDataInput)
    {
        this.deleted = input.readBoolean();
    }

}