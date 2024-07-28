import { FightResultListEntry } from "./../../../../types/game/context/fight/FightResultListEntry";
import { NamedPartyTeamWithOutcome } from "./../../../../types/game/context/roleplay/party/NamedPartyTeamWithOutcome";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightEndMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2386;

	public duration: number = 0;
	public rewardRate: number = 0;
	public lootShareLimitMalus: number = 0;
	public results: Array<FightResultListEntry>;
	public namedPartyTeamsOutcomes: Array<NamedPartyTeamWithOutcome>;

    public constructor()
    {
        super();
        this.results = Array<FightResultListEntry>();
        this.namedPartyTeamsOutcomes = Array<NamedPartyTeamWithOutcome>();
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
        this.deserializeAs_GameFightEndMessage(input);
    }

    private deserializeAs_GameFightEndMessage(input: ICustomDataInput)
    {
        let _id4: number = 0;
        let _item4: FightResultListEntry;
        let _item5: NamedPartyTeamWithOutcome;
        this._durationFunc(input);
        this._rewardRateFunc(input);
        this._lootShareLimitMalusFunc(input);
        let _resultsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _resultsLen; _i4++)
        {
            _id4 = input.readUnsignedShort();
            _item4 = ProtocolTypeManager.getInstance(FightResultListEntry,_id4);
            _item4.deserialize(input);
            this.results.push(_item4);
        }
        let _namedPartyTeamsOutcomesLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _namedPartyTeamsOutcomesLen; _i5++)
        {
            _item5 = new NamedPartyTeamWithOutcome();
            _item5.deserialize(input);
            this.namedPartyTeamsOutcomes.push(_item5);
        }
    }

    private _durationFunc(input: ICustomDataInput)
    {
        this.duration = input.readInt();
        if(this.duration < 0)
        {
            throw new Error("Forbidden value (" + this.duration + ") on element of GameFightEndMessage.duration.");
        }
    }

    private _rewardRateFunc(input: ICustomDataInput)
    {
        this.rewardRate = input.readVarShort();
    }

    private _lootShareLimitMalusFunc(input: ICustomDataInput)
    {
        this.lootShareLimitMalus = input.readShort();
    }

}