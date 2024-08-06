import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { UpdateLifePointsMessage } from "./UpdateLifePointsMessage";

export class LifePointsRegenEndMessage extends UpdateLifePointsMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6833;

	public lifePointsGained: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LifePointsRegenEndMessage.protocolId;
    }

    public initLifePointsRegenEndMessage(lifePoints: number = 0, maxLifePoints: number = 0, lifePointsGained: number = 0): LifePointsRegenEndMessage
    {
        super.initUpdateLifePointsMessage(lifePoints,maxLifePoints);
        this.lifePointsGained = lifePointsGained;
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
        this.serializeAs_LifePointsRegenEndMessage(output);
    }

    public serializeAs_LifePointsRegenEndMessage(output: ICustomDataOutput)
    {
        super.serializeAs_UpdateLifePointsMessage(output);
        if(this.lifePointsGained < 0)
        {
            throw new Error("Forbidden value (" + this.lifePointsGained + ") on element lifePointsGained.");
        }
        output.writeVarInt(this.lifePointsGained);
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