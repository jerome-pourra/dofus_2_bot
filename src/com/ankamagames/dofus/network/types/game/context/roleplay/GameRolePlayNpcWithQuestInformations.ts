import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { GameRolePlayNpcQuestFlag } from "./quest/GameRolePlayNpcQuestFlag";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayNpcInformations } from "./GameRolePlayNpcInformations";

export class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations implements INetworkType
{

	public static readonly protocolId: number = 7588;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public questFlag: GameRolePlayNpcQuestFlag;

    public constructor()
    {
        super();
        this.questFlag = new GameRolePlayNpcQuestFlag();
    }

    public getTypeId()
    {
        return GameRolePlayNpcWithQuestInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayNpcWithQuestInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayNpcWithQuestInformations.endpointServer;
    }

    public initGameRolePlayNpcWithQuestInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, npcId: number = 0, sex: boolean = false, specialArtworkId: number = 0, questFlag: GameRolePlayNpcQuestFlag = null): GameRolePlayNpcWithQuestInformations
    {
        super.initGameRolePlayNpcInformations(contextualId,disposition,look,npcId,sex,specialArtworkId);
        this.questFlag = questFlag;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayNpcWithQuestInformations(output);
    }

    public serializeAs_GameRolePlayNpcWithQuestInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayNpcInformations(output);
        this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayNpcWithQuestInformations(input);
    }

    private deserializeAs_GameRolePlayNpcWithQuestInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.questFlag = new GameRolePlayNpcQuestFlag();
        this.questFlag.deserialize(input);
    }

}