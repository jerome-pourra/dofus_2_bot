import { GameServerInformations } from "./../../types/connection/GameServerInformations";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ServerStatusUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4424;

	public server: GameServerInformations;

    public constructor()
    {
        super();
        this.server = new GameServerInformations();
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
        this.deserializeAs_ServerStatusUpdateMessage(input);
    }

    private deserializeAs_ServerStatusUpdateMessage(input: ICustomDataInput)
    {
        this.server = new GameServerInformations();
        this.server.deserialize(input);
    }

}