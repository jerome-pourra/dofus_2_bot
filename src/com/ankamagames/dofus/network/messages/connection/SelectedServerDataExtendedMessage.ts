import { GameServerInformations } from "./../../types/connection/GameServerInformations";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { SelectedServerDataMessage } from "./SelectedServerDataMessage";

export class SelectedServerDataExtendedMessage extends SelectedServerDataMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7269;

	public servers: Array<GameServerInformations>;

    public constructor()
    {
        super();
        this.servers = Array<GameServerInformations>();
    }

    public getMessageId()
    {
        return SelectedServerDataExtendedMessage.protocolId;
    }

    public initSelectedServerDataExtendedMessage(serverId: number = 0, address: string = "", ports: Array<number> = null, canCreateNewCharacter: boolean = false, ticket: Array<number> = null, servers: Array<GameServerInformations> = null): SelectedServerDataExtendedMessage
    {
        super.initSelectedServerDataMessage(serverId,address,ports,canCreateNewCharacter,ticket);
        this.servers = servers;
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
        this.serializeAs_SelectedServerDataExtendedMessage(output);
    }

    public serializeAs_SelectedServerDataExtendedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_SelectedServerDataMessage(output);
        output.writeShort(this.servers.length);
        for(var _i1: number = 0; _i1 < this.servers.length; _i1++)
        {
            (this.servers[_i1] as GameServerInformations).serializeAs_GameServerInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SelectedServerDataExtendedMessage(input);
    }

    private deserializeAs_SelectedServerDataExtendedMessage(input: ICustomDataInput)
    {
        let _item1: GameServerInformations;
        super.deserialize(input);
        let _serversLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _serversLen; _i1++)
        {
            _item1 = new GameServerInformations();
            _item1.deserialize(input);
            this.servers.push(_item1);
        }
    }

}