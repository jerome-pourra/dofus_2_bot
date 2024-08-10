import { FightStartingPositions } from "./../../../../types/game/context/fight/FightStartingPositions";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapFightStartPositionsUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9437;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mapId: number = 0;
	public fightStartPositions: FightStartingPositions;

    public constructor()
    {
        super();
        this.fightStartPositions = new FightStartingPositions();
    }

    public getMessageId()
    {
        return MapFightStartPositionsUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MapFightStartPositionsUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MapFightStartPositionsUpdateMessage.endpointServer;
    }

    public initMapFightStartPositionsUpdateMessage(mapId: number = 0, fightStartPositions: FightStartingPositions = null): MapFightStartPositionsUpdateMessage
    {
        this.mapId = mapId;
        this.fightStartPositions = fightStartPositions;
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
        this.serializeAs_MapFightStartPositionsUpdateMessage(output);
    }

    public serializeAs_MapFightStartPositionsUpdateMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        this.fightStartPositions.serializeAs_FightStartingPositions(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapFightStartPositionsUpdateMessage(input);
    }

    private deserializeAs_MapFightStartPositionsUpdateMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this.fightStartPositions = new FightStartingPositions();
        this.fightStartPositions.deserialize(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of MapFightStartPositionsUpdateMessage.mapId.");
        }
    }

}