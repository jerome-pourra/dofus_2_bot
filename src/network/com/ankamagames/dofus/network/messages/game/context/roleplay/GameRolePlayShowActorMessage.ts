import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayShowActorMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1818;

	public informations: GameRolePlayActorInformations;

    public constructor()
    {
        super();
        this.informations = new GameRolePlayActorInformations();
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
        this.deserializeAs_GameRolePlayShowActorMessage(input);
    }

    private deserializeAs_GameRolePlayShowActorMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameRolePlayActorInformations,_id1);
        this.informations.deserialize(input);
    }

}