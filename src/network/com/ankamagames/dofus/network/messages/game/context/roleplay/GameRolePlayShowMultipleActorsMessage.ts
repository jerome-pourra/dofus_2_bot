import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayShowMultipleActorsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 323;

	public informationsList: Array<GameRolePlayActorInformations>;

    public constructor()
    {
        super();
        this.informationsList = Array<GameRolePlayActorInformations>();
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
        this.deserializeAs_GameRolePlayShowMultipleActorsMessage(input);
    }

    private deserializeAs_GameRolePlayShowMultipleActorsMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: GameRolePlayActorInformations;
        let _informationsListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _informationsListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(GameRolePlayActorInformations,_id1);
            _item1.deserialize(input);
            this.informationsList.push(_item1);
        }
    }

}