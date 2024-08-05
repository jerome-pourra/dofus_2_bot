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

export class MapComplementaryInformationsAnomalyMessage extends MapComplementaryInformationsDataMessage
{

	public static readonly protocolId: number = 7688;

	public level: number = 0;
	public closingTime: number = 0;

    public constructor()
    {
        super();
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