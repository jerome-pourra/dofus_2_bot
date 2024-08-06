import { ActorAlignmentInformations } from "./../../character/alignment/ActorAlignmentInformations";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanInformations } from "./HumanInformations";
import { GameRolePlayHumanoidInformations } from "./GameRolePlayHumanoidInformations";

export class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations implements INetworkType
{

	public static readonly protocolId: number = 9304;

	public alignmentInfos: ActorAlignmentInformations;

    public constructor()
    {
        super();
        this.alignmentInfos = new ActorAlignmentInformations();
    }

    public getTypeId()
    {
        return GameRolePlayCharacterInformations.protocolId;
    }

    public initGameRolePlayCharacterInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, name: string = "", humanoidInfo: HumanInformations = null, accountId: number = 0, alignmentInfos: ActorAlignmentInformations = null): GameRolePlayCharacterInformations
    {
        super.initGameRolePlayHumanoidInformations(contextualId,disposition,look,name,humanoidInfo,accountId);
        this.alignmentInfos = alignmentInfos;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayCharacterInformations(output);
    }

    public serializeAs_GameRolePlayCharacterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayHumanoidInformations(output);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(output);
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