import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightAIInformations } from "./GameFightAIInformations";

export class GameFightTaxCollectorInformations extends GameFightAIInformations implements INetworkType
{

	public static readonly protocolId: number = 7175;

	public firstNameId: number = 0;
	public lastNameId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightTaxCollectorInformations.protocolId;
    }

    public initGameFightTaxCollectorInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, firstNameId: number = 0, lastNameId: number = 0): GameFightTaxCollectorInformations
    {
        super.initGameFightAIInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions);
        this.firstNameId = firstNameId;
        this.lastNameId = lastNameId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightTaxCollectorInformations(output);
    }

    public serializeAs_GameFightTaxCollectorInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightAIInformations(output);
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
        }
        output.writeVarShort(this.firstNameId);
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
        }
        output.writeVarShort(this.lastNameId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightTaxCollectorInformations(input);
    }

    private deserializeAs_GameFightTaxCollectorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._firstNameIdFunc(input);
        this._lastNameIdFunc(input);
    }

    private _firstNameIdFunc(input: ICustomDataInput)
    {
        this.firstNameId = input.readVarUhShort();
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element of GameFightTaxCollectorInformations.firstNameId.");
        }
    }

    private _lastNameIdFunc(input: ICustomDataInput)
    {
        this.lastNameId = input.readVarUhShort();
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element of GameFightTaxCollectorInformations.lastNameId.");
        }
    }

}