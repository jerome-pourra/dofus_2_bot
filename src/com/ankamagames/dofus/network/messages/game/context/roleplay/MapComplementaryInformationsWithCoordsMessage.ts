import { FightCommonInformations } from "./../../../../types/game/context/fight/FightCommonInformations";
import { FightStartingPositions } from "./../../../../types/game/context/fight/FightStartingPositions";
import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { HouseInformations } from "./../../../../types/game/house/HouseInformations";
import { InteractiveElement } from "./../../../../types/game/interactive/InteractiveElement";
import { MapObstacle } from "./../../../../types/game/interactive/MapObstacle";
import { StatedElement } from "./../../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { MapComplementaryInformationsDataMessage } from "./MapComplementaryInformationsDataMessage";

export class MapComplementaryInformationsWithCoordsMessage extends MapComplementaryInformationsDataMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5198;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public worldX: number = 0;
	public worldY: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MapComplementaryInformationsWithCoordsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MapComplementaryInformationsWithCoordsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MapComplementaryInformationsWithCoordsMessage.endpointServer;
    }

    public initMapComplementaryInformationsWithCoordsMessage(subAreaId: number = 0, mapId: number = 0, houses: Array<HouseInformations> = null, actors: Array<GameRolePlayActorInformations> = null, interactiveElements: Array<InteractiveElement> = null, statedElements: Array<StatedElement> = null, obstacles: Array<MapObstacle> = null, fights: Array<FightCommonInformations> = null, hasAggressiveMonsters: boolean = false, fightStartPositions: FightStartingPositions = null, worldX: number = 0, worldY: number = 0): MapComplementaryInformationsWithCoordsMessage
    {
        super.initMapComplementaryInformationsDataMessage(subAreaId,mapId,houses,actors,interactiveElements,statedElements,obstacles,fights,hasAggressiveMonsters,fightStartPositions);
        this.worldX = worldX;
        this.worldY = worldY;
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
        this.serializeAs_MapComplementaryInformationsWithCoordsMessage(output);
    }

    public serializeAs_MapComplementaryInformationsWithCoordsMessage(output: ICustomDataOutput)
    {
        super.serializeAs_MapComplementaryInformationsDataMessage(output);
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
        }
        output.writeShort(this.worldX);
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        }
        output.writeShort(this.worldY);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapComplementaryInformationsWithCoordsMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsWithCoordsMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of MapComplementaryInformationsWithCoordsMessage.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of MapComplementaryInformationsWithCoordsMessage.worldY.");
        }
    }

}