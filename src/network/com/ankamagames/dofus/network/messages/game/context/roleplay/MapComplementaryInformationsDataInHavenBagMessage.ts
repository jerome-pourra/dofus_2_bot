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

export class MapComplementaryInformationsDataInHavenBagMessage extends MapComplementaryInformationsDataMessage
{

	public static readonly protocolId: number = 2021;

	public ownerInformations: CharacterMinimalInformations;
	public theme: number = 0;
	public roomId: number = 0;
	public maxRoomId: number = 0;

    public constructor()
    {
        super();
        this.ownerInformations = new CharacterMinimalInformations();
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