import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanInformations } from "./HumanInformations";
import { GameRolePlayHumanoidInformations } from "./GameRolePlayHumanoidInformations";

export class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations implements INetworkType
{

	public static readonly protocolId: number = 2574;

	public monsterId: number = 0;
	public powerLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameRolePlayMutantInformations.protocolId;
    }

    public initGameRolePlayMutantInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, name: string = "", humanoidInfo: HumanInformations = null, accountId: number = 0, monsterId: number = 0, powerLevel: number = 0): GameRolePlayMutantInformations
    {
        super.initGameRolePlayHumanoidInformations(contextualId,disposition,look,name,humanoidInfo,accountId);
        this.monsterId = monsterId;
        this.powerLevel = powerLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayMutantInformations(output);
    }

    public serializeAs_GameRolePlayMutantInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayHumanoidInformations(output);
        if(this.monsterId < 0)
        {
            throw new Error("Forbidden value (" + this.monsterId + ") on element monsterId.");
        }
        output.writeVarShort(this.monsterId);
        output.writeByte(this.powerLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayMutantInformations(input);
    }

    private deserializeAs_GameRolePlayMutantInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._monsterIdFunc(input);
        this._powerLevelFunc(input);
    }

    private _monsterIdFunc(input: ICustomDataInput)
    {
        this.monsterId = input.readVarUhShort();
        if(this.monsterId < 0)
        {
            throw new Error("Forbidden value (" + this.monsterId + ") on element of GameRolePlayMutantInformations.monsterId.");
        }
    }

    private _powerLevelFunc(input: ICustomDataInput)
    {
        this.powerLevel = input.readByte();
    }

}