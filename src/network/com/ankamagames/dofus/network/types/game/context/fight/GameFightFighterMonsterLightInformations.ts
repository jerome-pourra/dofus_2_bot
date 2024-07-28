import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterLightInformations } from "./GameFightFighterLightInformations";

export class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations
{

	public static readonly protocolId: number = 3925;

	public creatureGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightFighterMonsterLightInformations(input);
    }

    private deserializeAs_GameFightFighterMonsterLightInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._creatureGenericIdFunc(input);
    }

    private _creatureGenericIdFunc(input: ICustomDataInput)
    {
        this.creatureGenericId = input.readVarUhShort();
        if(this.creatureGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGenericId + ") on element of GameFightFighterMonsterLightInformations.creatureGenericId.");
        }
    }

}