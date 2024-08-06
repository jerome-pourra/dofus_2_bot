import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class UpdateLifePointsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1395;

	public lifePoints: number = 0;
	public maxLifePoints: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return UpdateLifePointsMessage.protocolId;
    }

    public initUpdateLifePointsMessage(lifePoints: number = 0, maxLifePoints: number = 0): UpdateLifePointsMessage
    {
        this.lifePoints = lifePoints;
        this.maxLifePoints = maxLifePoints;
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
        this.serializeAs_UpdateLifePointsMessage(output);
    }

    public serializeAs_UpdateLifePointsMessage(output: ICustomDataOutput)
    {
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
        }
        output.writeVarInt(this.lifePoints);
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
        }
        output.writeVarInt(this.maxLifePoints);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateLifePointsMessage(input);
    }

    private deserializeAs_UpdateLifePointsMessage(input: ICustomDataInput)
    {
        this._lifePointsFunc(input);
        this._maxLifePointsFunc(input);
    }

    private _lifePointsFunc(input: ICustomDataInput)
    {
        this.lifePoints = input.readVarUhInt();
        if(this.lifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.lifePoints + ") on element of UpdateLifePointsMessage.lifePoints.");
        }
    }

    private _maxLifePointsFunc(input: ICustomDataInput)
    {
        this.maxLifePoints = input.readVarUhInt();
        if(this.maxLifePoints < 0)
        {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of UpdateLifePointsMessage.maxLifePoints.");
        }
    }

}