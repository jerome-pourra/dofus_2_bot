import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightStartingPositions
{

	public static readonly protocolId: number = 5557;

	public positionsForChallengers: Array<number>;
	public positionsForDefenders: Array<number>;

    public constructor()
    {
        this.positionsForChallengers = Array<number>();
        this.positionsForDefenders = Array<number>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightStartingPositions(input);
    }

    private deserializeAs_FightStartingPositions(input: ICustomDataInput)
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
    }

}