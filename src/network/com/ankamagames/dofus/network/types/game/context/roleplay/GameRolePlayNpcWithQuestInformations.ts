import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { GameRolePlayNpcQuestFlag } from "./quest/GameRolePlayNpcQuestFlag";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayNpcInformations } from "./GameRolePlayNpcInformations";

export class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations
{

	public static readonly protocolId: number = 7588;

	public questFlag: GameRolePlayNpcQuestFlag;

    public constructor()
    {
        super();
        this.questFlag = new GameRolePlayNpcQuestFlag();
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