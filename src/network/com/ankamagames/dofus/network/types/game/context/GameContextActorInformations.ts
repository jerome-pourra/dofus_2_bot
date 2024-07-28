import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { GameContextActorPositionInformations } from "./GameContextActorPositionInformations";

export class GameContextActorInformations extends GameContextActorPositionInformations
{

	public static readonly protocolId: number = 9060;

	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextActorInformations(input);
    }

    private deserializeAs_GameContextActorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

}