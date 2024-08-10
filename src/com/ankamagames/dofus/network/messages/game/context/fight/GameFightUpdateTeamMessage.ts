import { FightTeamInformations } from "./../../../../types/game/context/fight/FightTeamInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightUpdateTeamMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3874;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fightId: number = 0;
	public team: FightTeamInformations;

    public constructor()
    {
        super();
        this.team = new FightTeamInformations();
    }

    public getMessageId()
    {
        return GameFightUpdateTeamMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightUpdateTeamMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightUpdateTeamMessage.endpointServer;
    }

    public initGameFightUpdateTeamMessage(fightId: number = 0, team: FightTeamInformations = null): GameFightUpdateTeamMessage
    {
        this.fightId = fightId;
        this.team = team;
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
        this.serializeAs_GameFightUpdateTeamMessage(output);
    }

    public serializeAs_GameFightUpdateTeamMessage(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        this.team.serializeAs_FightTeamInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightUpdateTeamMessage(input);
    }

    private deserializeAs_GameFightUpdateTeamMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this.team = new FightTeamInformations();
        this.team.deserialize(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightUpdateTeamMessage.fightId.");
        }
    }

}