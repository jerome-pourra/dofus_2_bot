import { GameServerInformations } from "./../../types/connection/GameServerInformations";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4424;

	public server: GameServerInformations;

    public constructor()
    {
        super();
        this.server = new GameServerInformations();
    }

    public getMessageId()
    {
        return ServerStatusUpdateMessage.protocolId;
    }

    public initServerStatusUpdateMessage(server: GameServerInformations = null): ServerStatusUpdateMessage
    {
        this.server = server;
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
        this.serializeAs_ServerStatusUpdateMessage(output);
    }

    public serializeAs_ServerStatusUpdateMessage(output: ICustomDataOutput)
    {
        this.server.serializeAs_GameServerInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerStatusUpdateMessage(input);
    }

    private deserializeAs_ServerStatusUpdateMessage(input: ICustomDataInput)
    {
        this.server = new GameServerInformations();
        this.server.deserialize(input);
    }

}