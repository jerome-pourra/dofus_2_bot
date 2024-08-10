import { ActorOrientation } from "./../../../types/game/context/ActorOrientation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapChangeOrientationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8741;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public orientation: ActorOrientation;

    public constructor()
    {
        super();
        this.orientation = new ActorOrientation();
    }

    public getMessageId()
    {
        return GameMapChangeOrientationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameMapChangeOrientationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameMapChangeOrientationMessage.endpointServer;
    }

    public initGameMapChangeOrientationMessage(orientation: ActorOrientation = null): GameMapChangeOrientationMessage
    {
        this.orientation = orientation;
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
        this.serializeAs_GameMapChangeOrientationMessage(output);
    }

    public serializeAs_GameMapChangeOrientationMessage(output: ICustomDataOutput)
    {
        this.orientation.serializeAs_ActorOrientation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameMapChangeOrientationMessage(input);
    }

    private deserializeAs_GameMapChangeOrientationMessage(input: ICustomDataInput)
    {
        this.orientation = new ActorOrientation();
        this.orientation.deserialize(input);
    }

}