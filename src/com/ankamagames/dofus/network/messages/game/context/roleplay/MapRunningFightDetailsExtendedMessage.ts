import { GameFightFighterLightInformations } from "./../../../../types/game/context/fight/GameFightFighterLightInformations";
import { NamedPartyTeam } from "./../../../../types/game/context/roleplay/party/NamedPartyTeam";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { MapRunningFightDetailsMessage } from "./MapRunningFightDetailsMessage";

export class MapRunningFightDetailsExtendedMessage extends MapRunningFightDetailsMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8895;

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
        return MapRunningFightDetailsExtendedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MapRunningFightDetailsExtendedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MapRunningFightDetailsExtendedMessage.endpointServer;
    }

    public initMapRunningFightDetailsExtendedMessage(fightId: number = 0, attackers: Array<GameFightFighterLightInformations> = null, defenders: Array<GameFightFighterLightInformations> = null, namedPartyTeams: Array<NamedPartyTeam> = null): MapRunningFightDetailsExtendedMessage
    {
        super.initMapRunningFightDetailsMessage(fightId,attackers,defenders);
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
        this.serializeAs_MapRunningFightDetailsExtendedMessage(output);
    }

    public serializeAs_MapRunningFightDetailsExtendedMessage(output: ICustomDataOutput)
    {
        super.serializeAs_MapRunningFightDetailsMessage(output);
        output.writeShort(this.namedPartyTeams.length);
        for(var _i1: number = 0; _i1 < this.namedPartyTeams.length; _i1++)
        {
            (this.namedPartyTeams[_i1] as NamedPartyTeam).serializeAs_NamedPartyTeam(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapRunningFightDetailsExtendedMessage(input);
    }

    private deserializeAs_MapRunningFightDetailsExtendedMessage(input: ICustomDataInput)
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