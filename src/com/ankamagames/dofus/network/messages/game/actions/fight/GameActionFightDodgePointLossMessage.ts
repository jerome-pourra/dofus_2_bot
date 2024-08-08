import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightDodgePointLossMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7515;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;
	public amount: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightDodgePointLossMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightDodgePointLossMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightDodgePointLossMessage.endpointServer;
    }

    public initGameActionFightDodgePointLossMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, amount: number = 0): GameActionFightDodgePointLossMessage
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
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionFightDodgePointLossMessage(output);
    }

    public serializeAs_GameActionFightDodgePointLossMessage(output: ICustomDataOutput)
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
        output.writeVarShort(this.amount);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightDodgePointLossMessage(input);
    }

    private deserializeAs_GameActionFightDodgePointLossMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightDodgePointLossMessage.targetId.");
        }
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhShort();
        if(this.amount < 0)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of GameActionFightDodgePointLossMessage.amount.");
        }
    }

}