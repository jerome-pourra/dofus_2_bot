import { MapComplementaryInformationsDataMessage } from "./../MapComplementaryInformationsDataMessage";
import { FightCommonInformations } from "./../../../../../types/game/context/fight/FightCommonInformations";
import { FightStartingPositions } from "./../../../../../types/game/context/fight/FightStartingPositions";
import { GameRolePlayActorInformations } from "./../../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { HouseInformations } from "./../../../../../types/game/house/HouseInformations";
import { InteractiveElement } from "./../../../../../types/game/interactive/InteractiveElement";
import { MapObstacle } from "./../../../../../types/game/interactive/MapObstacle";
import { StatedElement } from "./../../../../../types/game/interactive/StatedElement";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";

export class MapComplementaryInformationsAnomalyMessage extends MapComplementaryInformationsDataMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7688;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public level: number = 0;
	public closingTime: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MapComplementaryInformationsAnomalyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return MapComplementaryInformationsAnomalyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return MapComplementaryInformationsAnomalyMessage.endpointServer;
    }

    public initMapComplementaryInformationsAnomalyMessage(subAreaId: number = 0, mapId: number = 0, houses: Array<HouseInformations> = null, actors: Array<GameRolePlayActorInformations> = null, interactiveElements: Array<InteractiveElement> = null, statedElements: Array<StatedElement> = null, obstacles: Array<MapObstacle> = null, fights: Array<FightCommonInformations> = null, hasAggressiveMonsters: boolean = false, fightStartPositions: FightStartingPositions = null, level: number = 0, closingTime: number = 0): MapComplementaryInformationsAnomalyMessage
    {
        super.initMapComplementaryInformationsDataMessage(subAreaId,mapId,houses,actors,interactiveElements,statedElements,obstacles,fights,hasAggressiveMonsters,fightStartPositions);
        this.level = level;
        this.closingTime = closingTime;
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
        this.serializeAs_MapComplementaryInformationsAnomalyMessage(output);
    }

    public serializeAs_MapComplementaryInformationsAnomalyMessage(output: ICustomDataOutput)
    {
        super.serializeAs_MapComplementaryInformationsDataMessage(output);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        if(this.closingTime < 0 || this.closingTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.closingTime + ") on element closingTime.");
        }
        output.writeVarLong(this.closingTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapComplementaryInformationsAnomalyMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsAnomalyMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._levelFunc(input);
        this._closingTimeFunc(input);
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of MapComplementaryInformationsAnomalyMessage.level.");
        }
    }

    private _closingTimeFunc(input: ICustomDataInput)
    {
        this.closingTime = input.readVarUhLong();
        if(this.closingTime < 0 || this.closingTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.closingTime + ") on element of MapComplementaryInformationsAnomalyMessage.closingTime.");
        }
    }

}