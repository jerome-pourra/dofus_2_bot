import { GameActionItem } from "./../../../types/game/startup/GameActionItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionItemAddMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8509;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public newAction: GameActionItem;

    public constructor()
    {
        super();
        this.newAction = new GameActionItem();
    }

    public getMessageId()
    {
        return GameActionItemAddMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionItemAddMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionItemAddMessage.endpointServer;
    }

    public initGameActionItemAddMessage(newAction: GameActionItem = null): GameActionItemAddMessage
    {
        this.newAction = newAction;
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
        this.serializeAs_GameActionItemAddMessage(output);
    }

    public serializeAs_GameActionItemAddMessage(output: ICustomDataOutput)
    {
        this.newAction.serializeAs_GameActionItem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionItemAddMessage(input);
    }

    private deserializeAs_GameActionItemAddMessage(input: ICustomDataInput)
    {
        this.newAction = new GameActionItem();
        this.newAction.deserialize(input);
    }

}