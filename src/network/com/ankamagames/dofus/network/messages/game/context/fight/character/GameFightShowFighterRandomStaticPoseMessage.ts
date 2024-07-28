import { GameFightFighterInformations } from "./../../../../../types/game/context/fight/GameFightFighterInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { GameFightShowFighterMessage } from "./GameFightShowFighterMessage";

export class GameFightShowFighterRandomStaticPoseMessage extends GameFightShowFighterMessage
{

	public static readonly protocolId: number = 7583;

    public constructor()
    {
        super();
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
        this.deserializeAs_GameFightShowFighterRandomStaticPoseMessage(input);
    }

    private deserializeAs_GameFightShowFighterRandomStaticPoseMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}