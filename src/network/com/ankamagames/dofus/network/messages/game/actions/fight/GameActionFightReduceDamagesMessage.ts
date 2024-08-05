import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightReduceDamagesMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 1547;

	public targetId: number = 0;
	public amount: number = 0;

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
        this.deserializeAs_GameActionFightReduceDamagesMessage(input);
    }

    private deserializeAs_GameActionFightReduceDamagesMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._amountFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightReduceDamagesMessage.targetId.");
        }
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhInt();
        if(this.amount < 0)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of GameActionFightReduceDamagesMessage.amount.");
        }
    }

}