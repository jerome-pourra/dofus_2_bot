import { GameFightFighterInformations } from "./../../../../../types/game/context/fight/GameFightFighterInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { GameFightShowFighterMessage } from "./GameFightShowFighterMessage";

export class GameFightShowFighterRandomStaticPoseMessage extends GameFightShowFighterMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7583;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightShowFighterRandomStaticPoseMessage.protocolId;
    }

    public initGameFightShowFighterRandomStaticPoseMessage(informations: GameFightFighterInformations = null): GameFightShowFighterRandomStaticPoseMessage
    {
        super.initGameFightShowFighterMessage(informations);
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightShowFighterRandomStaticPoseMessage(output);
    }

    public serializeAs_GameFightShowFighterRandomStaticPoseMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightShowFighterMessage(output);
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