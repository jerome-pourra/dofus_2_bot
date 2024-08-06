import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameActionFightLifePointsLostMessage } from "./GameActionFightLifePointsLostMessage";

export class GameActionFightLifeAndShieldPointsLostMessage extends GameActionFightLifePointsLostMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5703;

	public shieldLoss: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightLifeAndShieldPointsLostMessage.protocolId;
    }

    public initGameActionFightLifeAndShieldPointsLostMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0, loss: number = 0, permanentDamages: number = 0, elementId: number = 0, shieldLoss: number = 0): GameActionFightLifeAndShieldPointsLostMessage
    {
        super.initGameActionFightLifePointsLostMessage(actionId,sourceId,targetId,loss,permanentDamages,elementId);
        this.shieldLoss = shieldLoss;
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
        this.serializeAs_GameActionFightLifeAndShieldPointsLostMessage(output);
    }

    public serializeAs_GameActionFightLifeAndShieldPointsLostMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameActionFightLifePointsLostMessage(output);
        if(this.shieldLoss < 0)
        {
            throw new Error("Forbidden value (" + this.shieldLoss + ") on element shieldLoss.");
        }
        output.writeVarShort(this.shieldLoss);
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