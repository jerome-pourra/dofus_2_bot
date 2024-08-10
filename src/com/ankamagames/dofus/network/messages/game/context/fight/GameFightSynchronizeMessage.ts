import { GameFightFighterInformations } from "./../../../../types/game/context/fight/GameFightFighterInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightSynchronizeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8985;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public fighters: Array<GameFightFighterInformations>;

    public constructor()
    {
        super();
        this.fighters = Array<GameFightFighterInformations>();
    }

    public getMessageId()
    {
        return GameFightSynchronizeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightSynchronizeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightSynchronizeMessage.endpointServer;
    }

    public initGameFightSynchronizeMessage(fighters: Array<GameFightFighterInformations> = null): GameFightSynchronizeMessage
    {
        this.fighters = fighters;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightSynchronizeMessage(output);
    }

    public serializeAs_GameFightSynchronizeMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.fighters.length);
        for(var _i1: number = 0; _i1 < this.fighters.length; _i1++)
        {
            output.writeShort((this.fighters[_i1] as GameFightFighterInformations).getTypeId());
            (this.fighters[_i1] as GameFightFighterInformations).serialize(output);
        }
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