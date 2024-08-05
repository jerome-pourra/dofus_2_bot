import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { UpdateLifePointsMessage } from "./UpdateLifePointsMessage";

export class LifePointsRegenEndMessage extends UpdateLifePointsMessage
{

	public static readonly protocolId: number = 6833;

	public lifePointsGained: number = 0;

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
        this.deserializeAs_LifePointsRegenEndMessage(input);
    }

    private deserializeAs_LifePointsRegenEndMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._lifePointsGainedFunc(input);
    }

    private _lifePointsGainedFunc(input: ICustomDataInput)
    {
        this.lifePointsGained = input.readVarUhInt();
        if(this.lifePointsGained < 0)
        {
            throw new Error("Forbidden value (" + this.lifePointsGained + ") on element of LifePointsRegenEndMessage.lifePointsGained.");
        }
    }

}