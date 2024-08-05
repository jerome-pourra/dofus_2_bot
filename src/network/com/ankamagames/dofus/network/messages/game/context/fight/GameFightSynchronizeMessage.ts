import { GameFightFighterInformations } from "./../../../../types/game/context/fight/GameFightFighterInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightSynchronizeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8985;

	public fighters: Array<GameFightFighterInformations>;

    public constructor()
    {
        super();
        this.fighters = Array<GameFightFighterInformations>();
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
        this.deserializeAs_GameFightSynchronizeMessage(input);
    }

    private deserializeAs_GameFightSynchronizeMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: GameFightFighterInformations;
        let _fightersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _fightersLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(GameFightFighterInformations,_id1);
            _item1.deserialize(input);
            this.fighters.push(_item1);
        }
    }

}