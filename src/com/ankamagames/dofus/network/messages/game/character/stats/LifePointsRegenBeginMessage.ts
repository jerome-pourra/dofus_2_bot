import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LifePointsRegenBeginMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9965;

	public regenRate: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LifePointsRegenBeginMessage.protocolId;
    }

    public initLifePointsRegenBeginMessage(regenRate: number = 0): LifePointsRegenBeginMessage
    {
        this.regenRate = regenRate;
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
        this.serializeAs_LifePointsRegenBeginMessage(output);
    }

    public serializeAs_LifePointsRegenBeginMessage(output: ICustomDataOutput)
    {
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
        }
        output.writeByte(this.regenRate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LifePointsRegenBeginMessage(input);
    }

    private deserializeAs_LifePointsRegenBeginMessage(input: ICustomDataInput)
    {
        this._regenRateFunc(input);
    }

    private _regenRateFunc(input: ICustomDataInput)
    {
        this.regenRate = input.readUnsignedByte();
        if(this.regenRate < 0 || this.regenRate > 255)
        {
            throw new Error("Forbidden value (" + this.regenRate + ") on element of LifePointsRegenBeginMessage.regenRate.");
        }
    }

}