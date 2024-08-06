import { GameFightEndMessage } from "./../GameFightEndMessage";
import { FightResultListEntry } from "./../../../../../types/game/context/fight/FightResultListEntry";
import { NamedPartyTeamWithOutcome } from "./../../../../../types/game/context/roleplay/party/NamedPartyTeamWithOutcome";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";

export class BreachGameFightEndMessage extends GameFightEndMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9314;

	public budget: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachGameFightEndMessage.protocolId;
    }

    public initBreachGameFightEndMessage(duration: number = 0, rewardRate: number = 0, lootShareLimitMalus: number = 0, results: Array<FightResultListEntry> = null, namedPartyTeamsOutcomes: Array<NamedPartyTeamWithOutcome> = null, budget: number = 0): BreachGameFightEndMessage
    {
        super.initGameFightEndMessage(duration,rewardRate,lootShareLimitMalus,results,namedPartyTeamsOutcomes);
        this.budget = budget;
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
        this.serializeAs_BreachGameFightEndMessage(output);
    }

    public serializeAs_BreachGameFightEndMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightEndMessage(output);
        output.writeInt(this.budget);
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