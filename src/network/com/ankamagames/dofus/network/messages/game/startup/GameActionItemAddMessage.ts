import { GameActionItem } from "./../../../types/game/startup/GameActionItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionItemAddMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8509;

	public newAction: GameActionItem;

    public constructor()
    {
        super();
        this.newAction = new GameActionItem();
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
        this.deserializeAs_GameActionItemAddMessage(input);
    }

    private deserializeAs_GameActionItemAddMessage(input: ICustomDataInput)
    {
        this.newAction = new GameActionItem();
        this.newAction.deserialize(input);
    }

}