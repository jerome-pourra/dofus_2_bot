import { CharacterMinimalInformations } from "./../../../../types/game/character/CharacterMinimalInformations";
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

export class MapComplementaryInformationsDataInHavenBagMessage extends MapComplementaryInformationsDataMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2021;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ownerInformations: CharacterMinimalInformations;
	public theme: number = 0;
	public roomId: number = 0;
	public maxRoomId: number = 0;

    public constructor()
    {
        super();
        this.ownerInformations = new CharacterMinimalInformations();
    }

    public getMessageId()
    {
        return MapComplementaryInformationsDataInHavenBagMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MapComplementaryInformationsDataInHavenBagMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MapComplementaryInformationsDataInHavenBagMessage.endpointServer;
    }

    public initMapComplementaryInformationsDataInHavenBagMessage(subAreaId: number = 0, mapId: number = 0, houses: Array<HouseInformations> = null, actors: Array<GameRolePlayActorInformations> = null, interactiveElements: Array<InteractiveElement> = null, statedElements: Array<StatedElement> = null, obstacles: Array<MapObstacle> = null, fights: Array<FightCommonInformations> = null, hasAggressiveMonsters: boolean = false, fightStartPositions: FightStartingPositions = null, ownerInformations: CharacterMinimalInformations = null, theme: number = 0, roomId: number = 0, maxRoomId: number = 0): MapComplementaryInformationsDataInHavenBagMessage
    {
        super.initMapComplementaryInformationsDataMessage(subAreaId,mapId,houses,actors,interactiveElements,statedElements,obstacles,fights,hasAggressiveMonsters,fightStartPositions);
        this.ownerInformations = ownerInformations;
        this.theme = theme;
        this.roomId = roomId;
        this.maxRoomId = maxRoomId;
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
        this.serializeAs_MapComplementaryInformationsDataInHavenBagMessage(output);
    }

    public serializeAs_MapComplementaryInformationsDataInHavenBagMessage(output: ICustomDataOutput)
    {
        super.serializeAs_MapComplementaryInformationsDataMessage(output);
        this.ownerInformations.serializeAs_CharacterMinimalInformations(output);
        output.writeByte(this.theme);
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element roomId.");
        }
        output.writeByte(this.roomId);
        if(this.maxRoomId < 0)
        {
            throw new Error("Forbidden value (" + this.maxRoomId + ") on element maxRoomId.");
        }
        output.writeByte(this.maxRoomId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapComplementaryInformationsDataInHavenBagMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsDataInHavenBagMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.ownerInformations = new CharacterMinimalInformations();
        this.ownerInformations.deserialize(input);
        this._themeFunc(input);
        this._roomIdFunc(input);
        this._maxRoomIdFunc(input);
    }

    private _themeFunc(input: ICustomDataInput)
    {
        this.theme = input.readByte();
    }

    private _roomIdFunc(input: ICustomDataInput)
    {
        this.roomId = input.readByte();
        if(this.roomId < 0)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element of MapComplementaryInformationsDataInHavenBagMessage.roomId.");
        }
    }

    private _maxRoomIdFunc(input: ICustomDataInput)
    {
        this.maxRoomId = input.readByte();
        if(this.maxRoomId < 0)
        {
            throw new Error("Forbidden value (" + this.maxRoomId + ") on element of MapComplementaryInformationsDataInHavenBagMessage.maxRoomId.");
        }
    }

}