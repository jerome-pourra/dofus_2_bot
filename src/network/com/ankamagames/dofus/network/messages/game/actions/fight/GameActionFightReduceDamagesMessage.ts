import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightReduceDamagesMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1547;

	public targetId: number = 0;
	public amount: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightReduceDamagesMessage.protocolId;
    }

    public initGameActionFightReduceDamagesMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, amount: number = 0): GameActionFightReduceDamagesMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        this.amount = amount;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionFightReduceDamagesMessage(output);
    }

    public serializeAs_GameActionFightReduceDamagesMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        if(this.amount < 0)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element amount.");
        }
        output.writeVarInt(this.amount);
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