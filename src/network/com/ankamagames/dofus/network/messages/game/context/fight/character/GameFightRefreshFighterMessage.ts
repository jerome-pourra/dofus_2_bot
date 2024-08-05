import { GameContextActorInformations } from "./../../../../../types/game/context/GameContextActorInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameFightRefreshFighterMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3786;

	public informations: GameContextActorInformations;

    public constructor()
    {
        super();
        this.informations = new GameContextActorInformations();
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
        this.deserializeAs_GameFightRefreshFighterMessage(input);
    }

    private deserializeAs_GameFightRefreshFighterMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameContextActorInformations,_id1);
        this.informations.deserialize(input);
    }

}