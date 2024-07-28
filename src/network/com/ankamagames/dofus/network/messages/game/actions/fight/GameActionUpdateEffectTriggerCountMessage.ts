import { GameFightEffectTriggerCount } from "./../../../../types/game/context/fight/GameFightEffectTriggerCount";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameActionUpdateEffectTriggerCountMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6014;

	public targetIds: Array<GameFightEffectTriggerCount>;

    public constructor()
    {
        super();
        this.targetIds = Array<GameFightEffectTriggerCount>();
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
        this.deserializeAs_GameActionUpdateEffectTriggerCountMessage(input);
    }

    private deserializeAs_GameActionUpdateEffectTriggerCountMessage(input: ICustomDataInput)
    {
        let _item1: GameFightEffectTriggerCount;
        let _targetIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _targetIdsLen; _i1++)
        {
            _item1 = new GameFightEffectTriggerCount();
            _item1.deserialize(input);
            this.targetIds.push(_item1);
        }
    }

}