import { GameServerInformations } from "./../../types/connection/GameServerInformations";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ServersListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9500;

	public servers: Array<GameServerInformations>;
	public canCreateNewCharacter: boolean = false;

    public constructor()
    {
        super();
        this.servers = Array<GameServerInformations>();
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
        this.deserializeAs_ServersListMessage(input);
    }

    private deserializeAs_ServersListMessage(input: ICustomDataInput)
    {
        let _item1: GameServerInformations;
        let _serversLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _serversLen; _i1++)
        {
            _item1 = new GameServerInformations();
            _item1.deserialize(input);
            this.servers.push(_item1);
        }
        this._canCreateNewCharacterFunc(input);
    }

    private _canCreateNewCharacterFunc(input: ICustomDataInput)
    {
        this.canCreateNewCharacter = input.readBoolean();
    }

}