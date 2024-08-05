import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterNamedInformations } from "./GameFightFighterNamedInformations";

export class GameFightMutantInformations extends GameFightFighterNamedInformations
{

	public static readonly protocolId: number = 419;

	public powerLevel: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightMutantInformations(input);
    }

    private deserializeAs_GameFightMutantInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._powerLevelFunc(input);
    }

    private _powerLevelFunc(input: ICustomDataInput)
    {
        this.powerLevel = input.readByte();
        if(this.powerLevel < 0)
        {
            throw new Error("Forbidden value (" + this.powerLevel + ") on element of GameFightMutantInformations.powerLevel.");
        }
    }

}