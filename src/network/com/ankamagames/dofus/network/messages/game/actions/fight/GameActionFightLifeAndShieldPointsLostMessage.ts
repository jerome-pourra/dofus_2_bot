import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightLifePointsLostMessage } from "./GameActionFightLifePointsLostMessage";

export class GameActionFightLifeAndShieldPointsLostMessage extends GameActionFightLifePointsLostMessage
{

	public static readonly protocolId: number = 5703;

	public shieldLoss: number = 0;

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
        this.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(input);
    }

    private deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._shieldLossFunc(input);
    }

    private _shieldLossFunc(input: ICustomDataInput)
    {
        this.shieldLoss = input.readVarUhShort();
        if(this.shieldLoss < 0)
        {
            throw new Error("Forbidden value (" + this.shieldLoss + ") on element of GameActionFightLifeAndShieldPointsLostMessage.shieldLoss.");
        }
    }

}