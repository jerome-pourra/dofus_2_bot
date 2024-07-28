import { GameFightEndMessage } from "./../GameFightEndMessage";
import { FightResultListEntry } from "./../../../../../types/game/context/fight/FightResultListEntry";
import { NamedPartyTeamWithOutcome } from "./../../../../../types/game/context/roleplay/party/NamedPartyTeamWithOutcome";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";

export class BreachGameFightEndMessage extends GameFightEndMessage
{

	public static readonly protocolId: number = 9314;

	public budget: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_BreachGameFightEndMessage(input);
    }

    private deserializeAs_BreachGameFightEndMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._budgetFunc(input);
    }

    private _budgetFunc(input: ICustomDataInput)
    {
        this.budget = input.readInt();
    }

}