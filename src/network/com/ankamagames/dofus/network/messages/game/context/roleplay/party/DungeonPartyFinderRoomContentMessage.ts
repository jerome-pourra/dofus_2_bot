import { DungeonPartyFinderPlayer } from "./../../../../../types/game/context/roleplay/party/DungeonPartyFinderPlayer";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderRoomContentMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9524;

	public dungeonId: number = 0;
	public players: Array<DungeonPartyFinderPlayer>;

    public constructor()
    {
        super();
        this.players = Array<DungeonPartyFinderPlayer>();
    }

    public getMessageId()
    {
        return DungeonPartyFinderRoomContentMessage.protocolId;
    }

    public initDungeonPartyFinderRoomContentMessage(dungeonId: number = 0, players: Array<DungeonPartyFinderPlayer> = null): DungeonPartyFinderRoomContentMessage
    {
        this.dungeonId = dungeonId;
        this.players = players;
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
        this.serializeAs_DungeonPartyFinderRoomContentMessage(output);
    }

    public serializeAs_DungeonPartyFinderRoomContentMessage(output: ICustomDataOutput)
    {
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
        }
        output.writeVarShort(this.dungeonId);
        output.writeShort(this.players.length);
        for(var _i2: number = 0; _i2 < this.players.length; _i2++)
        {
            (this.players[_i2] as DungeonPartyFinderPlayer).serializeAs_DungeonPartyFinderPlayer(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonPartyFinderRoomContentMessage(input);
    }

    private deserializeAs_DungeonPartyFinderRoomContentMessage(input: ICustomDataInput)
    {
        let _item2: DungeonPartyFinderPlayer;
        this._dungeonIdFunc(input);
        let _playersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _playersLen; _i2++)
        {
            _item2 = new DungeonPartyFinderPlayer();
            _item2.deserialize(input);
            this.players.push(_item2);
        }
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderRoomContentMessage.dungeonId.");
        }
    }

}