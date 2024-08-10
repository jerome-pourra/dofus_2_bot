import { FightResultListEntry } from "./../../../../types/game/context/fight/FightResultListEntry";
import { NamedPartyTeamWithOutcome } from "./../../../../types/game/context/roleplay/party/NamedPartyTeamWithOutcome";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2386;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public getMessageId()
    {
        return GameFightEndMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightEndMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightEndMessage.endpointServer;
    }

    public initGameFightEndMessage(duration: number = 0, rewardRate: number = 0, lootShareLimitMalus: number = 0, results: Array<FightResultListEntry> = null, namedPartyTeamsOutcomes: Array<NamedPartyTeamWithOutcome> = null): GameFightEndMessage
    {
        this.duration = duration;
        this.rewardRate = rewardRate;
        this.lootShareLimitMalus = lootShareLimitMalus;
        this.results = results;
        this.namedPartyTeamsOutcomes = namedPartyTeamsOutcomes;
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
        this.serializeAs_GameFightEndMessage(output);
    }

    public serializeAs_GameFightEndMessage(output: ICustomDataOutput)
    {
        if(this.duration < 0)
        {
            throw new Error("Forbidden value (" + this.duration + ") on element duration.");
        }
        output.writeInt(this.duration);
        output.writeVarShort(this.rewardRate);
        output.writeShort(this.lootShareLimitMalus);
        output.writeShort(this.results.length);
        for(var _i4: number = 0; _i4 < this.results.length; _i4++)
        {
            output.writeShort((this.results[_i4] as FightResultListEntry).getTypeId());
            (this.results[_i4] as FightResultListEntry).serialize(output);
        }
        output.writeShort(this.namedPartyTeamsOutcomes.length);
        for(var _i5: number = 0; _i5 < this.namedPartyTeamsOutcomes.length; _i5++)
        {
            (this.namedPartyTeamsOutcomes[_i5] as NamedPartyTeamWithOutcome).serializeAs_NamedPartyTeamWithOutcome(output);
        }
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