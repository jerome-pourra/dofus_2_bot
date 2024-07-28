import { GameActionItem } from "./../../../types/game/startup/GameActionItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionItemListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6041;

	public actions: Array<GameActionItem>;

    public constructor()
    {
        super();
        this.actions = Array<GameActionItem>();
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
        this.deserializeAs_GameActionItemListMessage(input);
    }

    private deserializeAs_GameActionItemListMessage(input: ICustomDataInput)
    {
        let _item1: GameActionItem;
        let _actionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _actionsLen; _i1++)
        {
            _item1 = new GameActionItem();
            _item1.deserialize(input);
            this.actions.push(_item1);
        }
    }

}