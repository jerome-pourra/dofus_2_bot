import { ActorAlignmentInformations } from "./../../character/alignment/ActorAlignmentInformations";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightMonsterInformations } from "./GameFightMonsterInformations";

export class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations
{

	public static readonly protocolId: number = 7656;

	public alignmentInfos: ActorAlignmentInformations;

    public constructor()
    {
        super();
        this.alignmentInfos = new ActorAlignmentInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightMonsterWithAlignmentInformations(input);
    }

    private deserializeAs_GameFightMonsterWithAlignmentInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(input);
    }

}