import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightStartingPositions implements INetworkType
{

	public static readonly protocolId: number = 5557;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public positionsForChallengers: Array<number>;
	public positionsForDefenders: Array<number>;

    public constructor()
    {
        this.positionsForChallengers = Array<number>();
        this.positionsForDefenders = Array<number>();
    }

    public getTypeId()
    {
        return FightStartingPositions.protocolId;
    }

    public isEndpointClient()
    {
        return FightStartingPositions.endpointClient;
    }

    public isEndpointServer()
    {
        return FightStartingPositions.endpointServer;
    }

    public initFightStartingPositions(positionsForChallengers: Array<number> = null, positionsForDefenders: Array<number> = null): FightStartingPositions
    {
        this.positionsForChallengers = positionsForChallengers;
        this.positionsForDefenders = positionsForDefenders;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightStartingPositions(output);
    }

    public serializeAs_FightStartingPositions(output: ICustomDataOutput)
    {
        output.writeShort(this.positionsForChallengers.length);
        for(var _i1: number = 0; _i1 < this.positionsForChallengers.length; _i1++)
        {
            if(this.positionsForChallengers[_i1] < 0 || this.positionsForChallengers[_i1] > 559)
            {
                throw new Error("Forbidden value (" + this.positionsForChallengers[_i1] + ") on element 1 (starting at 1) of positionsForChallengers.");
            }
            output.writeVarShort(this.positionsForChallengers[_i1]);
        }
        output.writeShort(this.positionsForDefenders.length);
        for(var _i2: number = 0; _i2 < this.positionsForDefenders.length; _i2++)
        {
            if(this.positionsForDefenders[_i2] < 0 || this.positionsForDefenders[_i2] > 559)
            {
                throw new Error("Forbidden value (" + this.positionsForDefenders[_i2] + ") on element 2 (starting at 1) of positionsForDefenders.");
            }
            output.writeVarShort(this.positionsForDefenders[_i2]);
        }
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