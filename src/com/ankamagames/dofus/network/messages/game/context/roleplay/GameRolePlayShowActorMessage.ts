import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayShowActorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1818;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public informations: GameRolePlayActorInformations;

    public constructor()
    {
        super();
        this.informations = new GameRolePlayActorInformations();
    }

    public getMessageId()
    {
        return GameRolePlayShowActorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayShowActorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayShowActorMessage.endpointServer;
    }

    public initGameRolePlayShowActorMessage(informations: GameRolePlayActorInformations = null): GameRolePlayShowActorMessage
    {
        this.informations = informations;
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
        this.serializeAs_GameRolePlayShowActorMessage(output);
    }

    public serializeAs_GameRolePlayShowActorMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.informations.getTypeId());
        this.informations.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayShowActorMessage(input);
    }

    private deserializeAs_GameRolePlayShowActorMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameRolePlayActorInformations,_id1);
        this.informations.deserialize(input);
    }

}