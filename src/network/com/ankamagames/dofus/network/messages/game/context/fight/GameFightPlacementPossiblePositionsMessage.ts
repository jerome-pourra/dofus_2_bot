import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementPossiblePositionsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 282;

	public positionsForChallengers: Array<number>;
	public positionsForDefenders: Array<number>;
	public teamNumber: number = 2;

    public constructor()
    {
        super();
        this.positionsForChallengers = Array<number>();
        this.positionsForDefenders = Array<number>();
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
        this.deserializeAs_GameFightPlacementPossiblePositionsMessage(input);
    }

    private deserializeAs_GameFightPlacementPossiblePositionsMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _positionsForChallengersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _positionsForChallengersLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0 || _val1 > 559)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of positionsForChallengers.");
            }
            this.positionsForChallengers.push(_val1);
        }
        let _positionsForDefendersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _positionsForDefendersLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0 || _val2 > 559)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of positionsForDefenders.");
            }
            this.positionsForDefenders.push(_val2);
        }
        this._teamNumberFunc(input);
    }

    private _teamNumberFunc(input: ICustomDataInput)
    {
        this.teamNumber = input.readByte();
        if(this.teamNumber < 0)
        {
            throw new Error("Forbidden value (" + this.teamNumber + ") on element of GameFightPlacementPossiblePositionsMessage.teamNumber.");
        }
    }

}