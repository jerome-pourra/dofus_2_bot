import { GameActionItem } from "./../../../types/game/startup/GameActionItem";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionItemListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6041;

	public actions: Array<GameActionItem>;

    public constructor()
    {
        super();
        this.actions = Array<GameActionItem>();
    }

    public getMessageId()
    {
        return GameActionItemListMessage.protocolId;
    }

    public initGameActionItemListMessage(actions: Array<GameActionItem> = null): GameActionItemListMessage
    {
        this.actions = actions;
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
        this.serializeAs_GameActionItemListMessage(output);
    }

    public serializeAs_GameActionItemListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.actions.length);
        for(var _i1: number = 0; _i1 < this.actions.length; _i1++)
        {
            (this.actions[_i1] as GameActionItem).serializeAs_GameActionItem(output);
        }
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