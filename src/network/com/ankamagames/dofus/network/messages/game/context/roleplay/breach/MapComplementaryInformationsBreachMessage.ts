import { MapComplementaryInformationsDataMessage } from "./../MapComplementaryInformationsDataMessage";
import { FightCommonInformations } from "./../../../../../types/game/context/fight/FightCommonInformations";
import { FightStartingPositions } from "./../../../../../types/game/context/fight/FightStartingPositions";
import { GameRolePlayActorInformations } from "./../../../../../types/game/context/roleplay/GameRolePlayActorInformations";
import { BreachBranch } from "./../../../../../types/game/context/roleplay/breach/BreachBranch";
import { HouseInformations } from "./../../../../../types/game/house/HouseInformations";
import { InteractiveElement } from "./../../../../../types/game/interactive/InteractiveElement";
import { MapObstacle } from "./../../../../../types/game/interactive/MapObstacle";
import { StatedElement } from "./../../../../../types/game/interactive/StatedElement";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";

export class MapComplementaryInformationsBreachMessage extends MapComplementaryInformationsDataMessage
{

	public static readonly protocolId: number = 4428;

	public floor: number = 0;
	public room: number = 0;
	public infinityMode: number = 0;
	public branches: Array<BreachBranch>;

    public constructor()
    {
        super();
        this.branches = Array<BreachBranch>();
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
        this.deserializeAs_MapComplementaryInformationsBreachMessage(input);
    }

    private deserializeAs_MapComplementaryInformationsBreachMessage(input: ICustomDataInput)
    {
        let _id4: number = 0;
        let _item4: BreachBranch;
        super.deserialize(input);
        this._floorFunc(input);
        this._roomFunc(input);
        this._infinityModeFunc(input);
        let _branchesLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _branchesLen; _i4++)
        {
            _id4 = input.readUnsignedShort();
            _item4 = ProtocolTypeManager.getInstance(BreachBranch,_id4);
            _item4.deserialize(input);
            this.branches.push(_item4);
        }
    }

    private _floorFunc(input: ICustomDataInput)
    {
        this.floor = input.readVarUhInt();
        if(this.floor < 0)
        {
            throw new Error("Forbidden value (" + this.floor + ") on element of MapComplementaryInformationsBreachMessage.floor.");
        }
    }

    private _roomFunc(input: ICustomDataInput)
    {
        this.room = input.readByte();
        if(this.room < 0)
        {
            throw new Error("Forbidden value (" + this.room + ") on element of MapComplementaryInformationsBreachMessage.room.");
        }
    }

    private _infinityModeFunc(input: ICustomDataInput)
    {
        this.infinityMode = input.readShort();
        if(this.infinityMode < 0)
        {
            throw new Error("Forbidden value (" + this.infinityMode + ") on element of MapComplementaryInformationsBreachMessage.infinityMode.");
        }
    }

}