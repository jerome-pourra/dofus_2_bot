import { FightCommonInformations } from "./../../../../types/game/context/fight/FightCommonInformations";
import { FightStartingPositions } from "./../../../../types/game/context/fight/FightStartingPositions";
import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { HouseInformations } from "./../../../../types/game/house/HouseInformations";
import { HouseInformationsInside } from "./../../../../types/game/house/HouseInformationsInside";
import { InteractiveElement } from "./../../../../types/game/interactive/InteractiveElement";
import { MapObstacle } from "./../../../../types/game/interactive/MapObstacle";
import { StatedElement } from "./../../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { MapComplementaryInformationsDataMessage } from "./MapComplementaryInformationsDataMessage";

export class MapComplementaryInformationsDataInHouseMessage extends MapComplementaryInformationsDataMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1071;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public currentHouse: HouseInformationsInside;

    public constructor()
    {
        super();
        this.currentHouse = new HouseInformationsInside();
    }

    public getMessageId()
    {
        return MapComplementaryInformationsDataInHouseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MapComplementaryInformationsDataInHouseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MapComplementaryInformationsDataInHouseMessage.endpointServer;
    }

    public initMapComplementaryInformationsDataInHouseMessage(subAreaId: number = 0, mapId: number = 0, houses: Array<HouseInformations> = null, actors: Array<GameRolePlayActorInformations> = null, interactiveElements: Array<InteractiveElement> = null, statedElements: Array<StatedElement> = null, obstacles: Array<MapObstacle> = null, fights: Array<FightCommonInformations> = null, hasAggressiveMonsters: boolean = false, fightStartPositions: FightStartingPositions = null, currentHouse: HouseInformationsInside = null): MapComplementaryInformationsDataInHouseMessage
    {
        super.initMapComplementaryInformationsDataMessage(subAreaId,mapId,houses,actors,interactiveElements,statedElements,obstacles,fights,hasAggressiveMonsters,fightStartPositions);
        this.currentHouse = currentHouse;
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
        this.serializeAs_MapComplementaryInformationsDataInHouseMessage(output);
    }

    public serializeAs_MapComplementaryInformationsDataInHouseMessage(output: ICustomDataOutput)
    {
        super.serializeAs_MapComplementaryInformationsDataMessage(output);
        this.currentHouse.serializeAs_HouseInformationsInside(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapComplementaryInformationsDataInHouseMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsDataInHouseMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.currentHouse = new HouseInformationsInside();
        this.currentHouse.deserialize(input);
    }

}