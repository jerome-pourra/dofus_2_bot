import { FightStartingPositions } from "./../../../../types/game/context/fight/FightStartingPositions";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapFightStartPositionsUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9437;

	public mapId: number = 0;
	public fightStartPositions: FightStartingPositions;

    public constructor()
    {
        super();
        this.fightStartPositions = new FightStartingPositions();
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