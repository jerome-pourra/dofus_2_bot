import { EntityMovementInformations } from "./../../../types/game/context/EntityMovementInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextMoveElementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5362;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public movement: EntityMovementInformations;

    public constructor()
    {
        super();
        this.movement = new EntityMovementInformations();
    }

    public getMessageId()
    {
        return GameContextMoveElementMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextMoveElementMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextMoveElementMessage.endpointServer;
    }

    public initGameContextMoveElementMessage(movement: EntityMovementInformations = null): GameContextMoveElementMessage
    {
        this.movement = movement;
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
        this.serializeAs_GameContextMoveElementMessage(output);
    }

    public serializeAs_GameContextMoveElementMessage(output: ICustomDataOutput)
    {
        this.movement.serializeAs_EntityMovementInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextMoveElementMessage(input);
    }

    private deserializeAs_GameContextMoveElementMessage(input: ICustomDataInput)
    {
        this.movement = new EntityMovementInformations();
        this.movement.deserialize(input);
    }

}