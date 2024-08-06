import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SubscriptionLimitationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8244;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SubscriptionLimitationMessage.protocolId;
    }

    public initSubscriptionLimitationMessage(reason: number = 0): SubscriptionLimitationMessage
    {
        this.reason = reason;
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
        this.serializeAs_SubscriptionLimitationMessage(output);
    }

    public serializeAs_SubscriptionLimitationMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SubscriptionLimitationMessage(input);
    }

    private deserializeAs_SubscriptionLimitationMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of SubscriptionLimitationMessage.reason.");
        }
    }

}