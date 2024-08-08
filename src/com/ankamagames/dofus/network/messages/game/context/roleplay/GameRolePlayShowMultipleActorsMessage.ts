import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayShowMultipleActorsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 323;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public informationsList: Array<GameRolePlayActorInformations>;

    public constructor()
    {
        super();
        this.informationsList = Array<GameRolePlayActorInformations>();
    }

    public getMessageId()
    {
        return GameRolePlayShowMultipleActorsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayShowMultipleActorsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayShowMultipleActorsMessage.endpointServer;
    }

    public initGameRolePlayShowMultipleActorsMessage(informationsList: Array<GameRolePlayActorInformations> = null): GameRolePlayShowMultipleActorsMessage
    {
        this.informationsList = informationsList;
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
        this.serializeAs_GameRolePlayShowMultipleActorsMessage(output);
    }

    public serializeAs_GameRolePlayShowMultipleActorsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.informationsList.length);
        for(var _i1: number = 0; _i1 < this.informationsList.length; _i1++)
        {
            output.writeShort((this.informationsList[_i1] as GameRolePlayActorInformations).getTypeId());
            (this.informationsList[_i1] as GameRolePlayActorInformations).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayShowMultipleActorsMessage(input);
    }

    private deserializeAs_GameRolePlayShowMultipleActorsMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: GameRolePlayActorInformations;
        let _informationsListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _informationsListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(GameRolePlayActorInformations,_id1);
            _item1.deserialize(input);
            this.informationsList.push(_item1);
        }
    }

}