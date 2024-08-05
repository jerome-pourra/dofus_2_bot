import { GameFightFighterLightInformations } from "./../../../../types/game/context/fight/GameFightFighterLightInformations";
import { NamedPartyTeam } from "./../../../../types/game/context/roleplay/party/NamedPartyTeam";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { MapRunningFightDetailsMessage } from "./MapRunningFightDetailsMessage";

export class MapRunningFightDetailsExtendedMessage extends MapRunningFightDetailsMessage
{

	public static readonly protocolId: number = 8895;

	public namedPartyTeams: Array<NamedPartyTeam>;

    public constructor()
    {
        super();
        this.namedPartyTeams = Array<NamedPartyTeam>();
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