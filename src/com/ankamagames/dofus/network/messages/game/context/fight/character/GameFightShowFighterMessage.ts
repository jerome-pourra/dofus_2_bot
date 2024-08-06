import { GameFightFighterInformations } from "./../../../../../types/game/context/fight/GameFightFighterInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameFightShowFighterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5747;

	public informations: GameFightFighterInformations;

    public constructor()
    {
        super();
        this.informations = new GameFightFighterInformations();
    }

    public getMessageId()
    {
        return GameFightShowFighterMessage.protocolId;
    }

    public initGameFightShowFighterMessage(informations: GameFightFighterInformations = null): GameFightShowFighterMessage
    {
        this.informations = informations;
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
        this.serializeAs_GameFightShowFighterMessage(output);
    }

    public serializeAs_GameFightShowFighterMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.informations.getTypeId());
        this.informations.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightShowFighterMessage(input);
    }

    private deserializeAs_GameFightShowFighterMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameFightFighterInformations,_id1);
        this.informations.deserialize(input);
    }

}