import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterInformations } from "./GameFightFighterInformations";

export class GameFightAIInformations extends GameFightFighterInformations
{

	public static readonly protocolId: number = 8061;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightAIInformations(input);
    }

    private deserializeAs_GameFightAIInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}