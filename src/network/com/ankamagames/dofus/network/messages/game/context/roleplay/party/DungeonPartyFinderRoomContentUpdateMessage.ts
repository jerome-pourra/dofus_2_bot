import { DungeonPartyFinderPlayer } from "./../../../../../types/game/context/roleplay/party/DungeonPartyFinderPlayer";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DungeonPartyFinderRoomContentUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5056;

	public dungeonId: number = 0;
	public addedPlayers: Array<DungeonPartyFinderPlayer>;
	public removedPlayersIds: Array<number>;

    public constructor()
    {
        super();
        this.addedPlayers = Array<DungeonPartyFinderPlayer>();
        this.removedPlayersIds = Array<number>();
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
        this.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(input);
    }

    private deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(input: ICustomDataInput)
    {
        let _item2: DungeonPartyFinderPlayer;
        let _val3: number = NaN;
        this._dungeonIdFunc(input);
        let _addedPlayersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _addedPlayersLen; _i2++)
        {
            _item2 = new DungeonPartyFinderPlayer();
            _item2.deserialize(input);
            this.addedPlayers.push(_item2);
        }
        let _removedPlayersIdsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _removedPlayersIdsLen; _i3++)
        {
            _val3 = input.readVarUhLong();
            if(_val3 < 0 || _val3 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of removedPlayersIds.");
            }
            this.removedPlayersIds.push(_val3);
        }
    }

    private _dungeonIdFunc(input: ICustomDataInput)
    {
        this.dungeonId = input.readVarUhShort();
        if(this.dungeonId < 0)
        {
            throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderRoomContentUpdateMessage.dungeonId.");
        }
    }

}