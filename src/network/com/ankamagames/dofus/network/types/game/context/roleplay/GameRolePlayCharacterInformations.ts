import { ActorAlignmentInformations } from "./../../character/alignment/ActorAlignmentInformations";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayHumanoidInformations } from "./GameRolePlayHumanoidInformations";

export class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations
{

	public static readonly protocolId: number = 9304;

	public alignmentInfos: ActorAlignmentInformations;

    public constructor()
    {
        super();
        this.alignmentInfos = new ActorAlignmentInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayCharacterInformations(input);
    }

    private deserializeAs_GameRolePlayCharacterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(input);
    }

}