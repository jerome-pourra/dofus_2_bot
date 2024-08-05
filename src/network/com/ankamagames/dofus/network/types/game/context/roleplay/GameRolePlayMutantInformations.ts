import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayHumanoidInformations } from "./GameRolePlayHumanoidInformations";

export class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations
{

	public static readonly protocolId: number = 2574;

	public monsterId: number = 0;
	public powerLevel: number = 0;

    public constructor()
    {
        super();
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