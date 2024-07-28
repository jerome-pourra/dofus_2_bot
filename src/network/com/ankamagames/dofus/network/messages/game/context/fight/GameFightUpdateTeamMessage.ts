import { FightTeamInformations } from "./../../../../types/game/context/fight/FightTeamInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightUpdateTeamMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3874;

	public fightId: number = 0;
	public team: FightTeamInformations;

    public constructor()
    {
        super();
        this.team = new FightTeamInformations();
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