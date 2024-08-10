import { NamedPartyTeam } from "./../../../../types/game/context/roleplay/party/NamedPartyTeam";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightJoinMessage } from "./GameFightJoinMessage";

export class GameFightSpectatorJoinMessage extends GameFightJoinMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3924;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public namedPartyTeams: Array<NamedPartyTeam>;

    public constructor()
    {
        super();
        this.namedPartyTeams = Array<NamedPartyTeam>();
    }

    public getMessageId()
    {
        return GameFightSpectatorJoinMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightSpectatorJoinMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightSpectatorJoinMessage.endpointServer;
    }

    public initGameFightSpectatorJoinMessage(isTeamPhase: boolean = false, canBeCancelled: boolean = false, canSayReady: boolean = false, isFightStarted: boolean = false, timeMaxBeforeFightStart: number = 0, fightType: number = 0, namedPartyTeams: Array<NamedPartyTeam> = null): GameFightSpectatorJoinMessage
    {
        super.initGameFightJoinMessage(isTeamPhase,canBeCancelled,canSayReady,isFightStarted,timeMaxBeforeFightStart,fightType);
        this.namedPartyTeams = namedPartyTeams;
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
        this.serializeAs_GameFightSpectatorJoinMessage(output);
    }

    public serializeAs_GameFightSpectatorJoinMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightJoinMessage(output);
        output.writeShort(this.namedPartyTeams.length);
        for(var _i1: number = 0; _i1 < this.namedPartyTeams.length; _i1++)
        {
            (this.namedPartyTeams[_i1] as NamedPartyTeam).serializeAs_NamedPartyTeam(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightSpectatorJoinMessage(input);
    }

    private deserializeAs_GameFightSpectatorJoinMessage(input: ICustomDataInput)
    {
        let _item1: NamedPartyTeam;
        super.deserialize(input);
        let _namedPartyTeamsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _namedPartyTeamsLen; _i1++)
        {
            _item1 = new NamedPartyTeam();
            _item1.deserialize(input);
            this.namedPartyTeams.push(_item1);
        }
    }

}