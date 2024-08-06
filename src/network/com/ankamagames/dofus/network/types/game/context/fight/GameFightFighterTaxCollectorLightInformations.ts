import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterLightInformations } from "./GameFightFighterLightInformations";

export class GameFightFighterTaxCollectorLightInformations extends GameFightFighterLightInformations implements INetworkType
{

	public static readonly protocolId: number = 3310;

	public firstNameId: number = 0;
	public lastNameId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightFighterTaxCollectorLightInformations.protocolId;
    }

    public initGameFightFighterTaxCollectorLightInformations(id: number = 0, wave: number = 0, level: number = 0, breed: number = 0, sex: boolean = false, alive: boolean = false, firstNameId: number = 0, lastNameId: number = 0): GameFightFighterTaxCollectorLightInformations
    {
        super.initGameFightFighterLightInformations(id,wave,level,breed,sex,alive);
        this.firstNameId = firstNameId;
        this.lastNameId = lastNameId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterTaxCollectorLightInformations(output);
    }

    public serializeAs_GameFightFighterTaxCollectorLightInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterLightInformations(output);
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
        this.deserializeAs_GameFightFighterTaxCollectorLightInformations(input);
    }

    private deserializeAs_GameFightFighterTaxCollectorLightInformations(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.firstNameId + ") on element of GameFightFighterTaxCollectorLightInformations.firstNameId.");
        }
    }

    private _lastNameIdFunc(input: ICustomDataInput)
    {
        this.lastNameId = input.readVarUhShort();
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element of GameFightFighterTaxCollectorLightInformations.lastNameId.");
        }
    }

}