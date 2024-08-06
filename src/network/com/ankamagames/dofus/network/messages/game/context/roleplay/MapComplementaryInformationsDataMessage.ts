import { FightCommonInformations } from "./../../../../types/game/context/fight/FightCommonInformations";
import { FightStartingPositions } from "./../../../../types/game/context/fight/FightStartingPositions";
import { GameRolePlayActorInformations } from "./../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { HouseInformations } from "./../../../../types/game/house/HouseInformations";
import { InteractiveElement } from "./../../../../types/game/interactive/InteractiveElement";
import { MapObstacle } from "./../../../../types/game/interactive/MapObstacle";
import { StatedElement } from "./../../../../types/game/interactive/StatedElement";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapComplementaryInformationsDataMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9792;

	public subAreaId: number = 0;
	public mapId: number = 0;
	public houses: Array<HouseInformations>;
	public actors: Array<GameRolePlayActorInformations>;
	public interactiveElements: Array<InteractiveElement>;
	public statedElements: Array<StatedElement>;
	public obstacles: Array<MapObstacle>;
	public fights: Array<FightCommonInformations>;
	public hasAggressiveMonsters: boolean = false;
	public fightStartPositions: FightStartingPositions;

    public constructor()
    {
        super();
        this.houses = Array<HouseInformations>();
        this.actors = Array<GameRolePlayActorInformations>();
        this.interactiveElements = Array<InteractiveElement>();
        this.statedElements = Array<StatedElement>();
        this.obstacles = Array<MapObstacle>();
        this.fights = Array<FightCommonInformations>();
        this.fightStartPositions = new FightStartingPositions();
    }

    public getMessageId()
    {
        return MapComplementaryInformationsDataMessage.protocolId;
    }

    public initMapComplementaryInformationsDataMessage(subAreaId: number = 0, mapId: number = 0, houses: Array<HouseInformations> = null, actors: Array<GameRolePlayActorInformations> = null, interactiveElements: Array<InteractiveElement> = null, statedElements: Array<StatedElement> = null, obstacles: Array<MapObstacle> = null, fights: Array<FightCommonInformations> = null, hasAggressiveMonsters: boolean = false, fightStartPositions: FightStartingPositions = null): MapComplementaryInformationsDataMessage
    {
        this.subAreaId = subAreaId;
        this.mapId = mapId;
        this.houses = houses;
        this.actors = actors;
        this.interactiveElements = interactiveElements;
        this.statedElements = statedElements;
        this.obstacles = obstacles;
        this.fights = fights;
        this.hasAggressiveMonsters = hasAggressiveMonsters;
        this.fightStartPositions = fightStartPositions;
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
        this.serializeAs_MapComplementaryInformationsDataMessage(output);
    }

    public serializeAs_MapComplementaryInformationsDataMessage(output: ICustomDataOutput)
    {
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeShort(this.houses.length);
        for(var _i3: number = 0; _i3 < this.houses.length; _i3++)
        {
            output.writeShort((this.houses[_i3] as HouseInformations).getTypeId());
            (this.houses[_i3] as HouseInformations).serialize(output);
        }
        output.writeShort(this.actors.length);
        for(var _i4: number = 0; _i4 < this.actors.length; _i4++)
        {
            output.writeShort((this.actors[_i4] as GameRolePlayActorInformations).getTypeId());
            (this.actors[_i4] as GameRolePlayActorInformations).serialize(output);
        }
        output.writeShort(this.interactiveElements.length);
        for(var _i5: number = 0; _i5 < this.interactiveElements.length; _i5++)
        {
            output.writeShort((this.interactiveElements[_i5] as InteractiveElement).getTypeId());
            (this.interactiveElements[_i5] as InteractiveElement).serialize(output);
        }
        output.writeShort(this.statedElements.length);
        for(var _i6: number = 0; _i6 < this.statedElements.length; _i6++)
        {
            (this.statedElements[_i6] as StatedElement).serializeAs_StatedElement(output);
        }
        output.writeShort(this.obstacles.length);
        for(var _i7: number = 0; _i7 < this.obstacles.length; _i7++)
        {
            (this.obstacles[_i7] as MapObstacle).serializeAs_MapObstacle(output);
        }
        output.writeShort(this.fights.length);
        for(var _i8: number = 0; _i8 < this.fights.length; _i8++)
        {
            (this.fights[_i8] as FightCommonInformations).serializeAs_FightCommonInformations(output);
        }
        output.writeBoolean(this.hasAggressiveMonsters);
        this.fightStartPositions.serializeAs_FightStartingPositions(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapComplementaryInformationsDataMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsDataMessage(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: HouseInformations;
        let _id4: number = 0;
        let _item4: GameRolePlayActorInformations;
        let _id5: number = 0;
        let _item5: InteractiveElement;
        let _item6: StatedElement;
        let _item7: MapObstacle;
        let _item8: FightCommonInformations;
        this._subAreaIdFunc(input);
        this._mapIdFunc(input);
        let _housesLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _housesLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(HouseInformations,_id3);
            _item3.deserialize(input);
            this.houses.push(_item3);
        }
        let _actorsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _actorsLen; _i4++)
        {
            _id4 = input.readUnsignedShort();
            _item4 = ProtocolTypeManager.getInstance(GameRolePlayActorInformations,_id4);
            _item4.deserialize(input);
            this.actors.push(_item4);
        }
        let _interactiveElementsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _interactiveElementsLen; _i5++)
        {
            _id5 = input.readUnsignedShort();
            _item5 = ProtocolTypeManager.getInstance(InteractiveElement,_id5);
            _item5.deserialize(input);
            this.interactiveElements.push(_item5);
        }
        let _statedElementsLen: number = input.readUnsignedShort();
        for(let _i6: number = 0; _i6 < _statedElementsLen; _i6++)
        {
            _item6 = new StatedElement();
            _item6.deserialize(input);
            this.statedElements.push(_item6);
        }
        let _obstaclesLen: number = input.readUnsignedShort();
        for(let _i7: number = 0; _i7 < _obstaclesLen; _i7++)
        {
            _item7 = new MapObstacle();
            _item7.deserialize(input);
            this.obstacles.push(_item7);
        }
        let _fightsLen: number = input.readUnsignedShort();
        for(let _i8: number = 0; _i8 < _fightsLen; _i8++)
        {
            _item8 = new FightCommonInformations();
            _item8.deserialize(input);
            this.fights.push(_item8);
        }
        this._hasAggressiveMonstersFunc(input);
        this.fightStartPositions = new FightStartingPositions();
        this.fightStartPositions.deserialize(input);
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of MapComplementaryInformationsDataMessage.subAreaId.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of MapComplementaryInformationsDataMessage.mapId.");
        }
    }

    private _hasAggressiveMonstersFunc(input: ICustomDataInput)
    {
        this.hasAggressiveMonsters = input.readBoolean();
    }

}