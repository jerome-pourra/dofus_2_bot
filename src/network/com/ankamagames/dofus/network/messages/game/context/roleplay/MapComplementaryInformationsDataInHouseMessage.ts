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

export class MapComplementaryInformationsDataInHouseMessage extends MapComplementaryInformationsDataMessage
{

	public static readonly protocolId: number = 1071;

	public currentHouse: HouseInformationsInside;

    public constructor()
    {
        super();
        this.currentHouse = new HouseInformationsInside();
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
        this.deserializeAs_MapComplementaryInformationsDataInHouseMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsDataInHouseMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.currentHouse = new HouseInformationsInside();
        this.currentHouse.deserialize(input);
    }

}