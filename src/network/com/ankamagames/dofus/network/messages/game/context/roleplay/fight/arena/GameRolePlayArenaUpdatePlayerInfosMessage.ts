import { ArenaRankInfos } from "./../../../../../../types/game/context/roleplay/fight/arena/ArenaRankInfos";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaUpdatePlayerInfosMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1665;

	public arenaRanks: Array<ArenaRankInfos>;
	public banEndDate: number = 0;

    public constructor()
    {
        super();
        this.arenaRanks = Array<ArenaRankInfos>();
    }

    public getMessageId()
    {
        return GameRolePlayArenaUpdatePlayerInfosMessage.protocolId;
    }

    public initGameRolePlayArenaUpdatePlayerInfosMessage(arenaRanks: Array<ArenaRankInfos> = null, banEndDate: number = 0): GameRolePlayArenaUpdatePlayerInfosMessage
    {
        this.arenaRanks = arenaRanks;
        this.banEndDate = banEndDate;
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
        this.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(output);
    }

    public serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.arenaRanks.length);
        for(var _i1: number = 0; _i1 < this.arenaRanks.length; _i1++)
        {
            (this.arenaRanks[_i1] as ArenaRankInfos).serializeAs_ArenaRankInfos(output);
        }
        if(this.banEndDate < -9007199254740992 || this.banEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.banEndDate + ") on element banEndDate.");
        }
        output.writeDouble(this.banEndDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(input);
    }

    private deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(input: ICustomDataInput)
    {
        let _item1: ArenaRankInfos;
        let _arenaRanksLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _arenaRanksLen; _i1++)
        {
            _item1 = new ArenaRankInfos();
            _item1.deserialize(input);
            this.arenaRanks.push(_item1);
        }
        this._banEndDateFunc(input);
    }

    private _banEndDateFunc(input: ICustomDataInput)
    {
        this.banEndDate = input.readDouble();
        if(this.banEndDate < -9007199254740992 || this.banEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.banEndDate + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.banEndDate.");
        }
    }

}