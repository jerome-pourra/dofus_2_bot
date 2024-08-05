import { FightCommonInformations } from "./../../../../../types/game/context/fight/FightCommonInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayShowChallengeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7254;

	public commonsInfos: FightCommonInformations;

    public constructor()
    {
        super();
        this.commonsInfos = new FightCommonInformations();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayShowChallengeMessage(input);
    }

    private deserializeAs_GameRolePlayShowChallengeMessage(input: ICustomDataInput)
    {
        this.commonsInfos = new FightCommonInformations();
        this.commonsInfos.deserialize(input);
    }

}