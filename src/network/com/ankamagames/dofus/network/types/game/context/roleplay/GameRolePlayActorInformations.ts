import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { GameContextActorInformations } from "./../GameContextActorInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameRolePlayActorInformations extends GameContextActorInformations
{

	public static readonly protocolId: number = 8764;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayActorInformations(input);
    }

    private deserializeAs_GameRolePlayActorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}