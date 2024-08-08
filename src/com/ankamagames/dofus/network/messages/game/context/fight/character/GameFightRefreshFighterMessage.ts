import { GameContextActorInformations } from "./../../../../../types/game/context/GameContextActorInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameFightRefreshFighterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3786;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public informations: GameContextActorInformations;

    public constructor()
    {
        super();
        this.informations = new GameContextActorInformations();
    }

    public getMessageId()
    {
        return GameFightRefreshFighterMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightRefreshFighterMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightRefreshFighterMessage.endpointServer;
    }

    public initGameFightRefreshFighterMessage(informations: GameContextActorInformations = null): GameFightRefreshFighterMessage
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
        this.serializeAs_GameFightRefreshFighterMessage(output);
    }

    public serializeAs_GameFightRefreshFighterMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.informations.getTypeId());
        this.informations.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightRefreshFighterMessage(input);
    }

    private deserializeAs_GameFightRefreshFighterMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameContextActorInformations,_id1);
        this.informations.deserialize(input);
    }

}