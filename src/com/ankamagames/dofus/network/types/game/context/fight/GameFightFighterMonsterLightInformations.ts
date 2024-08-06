import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterLightInformations } from "./GameFightFighterLightInformations";

export class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations implements INetworkType
{

	public static readonly protocolId: number = 3925;

	public creatureGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightFighterMonsterLightInformations.protocolId;
    }

    public initGameFightFighterMonsterLightInformations(id: number = 0, wave: number = 0, level: number = 0, breed: number = 0, sex: boolean = false, alive: boolean = false, creatureGenericId: number = 0): GameFightFighterMonsterLightInformations
    {
        super.initGameFightFighterLightInformations(id,wave,level,breed,sex,alive);
        this.creatureGenericId = creatureGenericId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterMonsterLightInformations(output);
    }

    public serializeAs_GameFightFighterMonsterLightInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterLightInformations(output);
        if(this.creatureGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGenericId + ") on element creatureGenericId.");
        }
        output.writeVarShort(this.creatureGenericId);
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