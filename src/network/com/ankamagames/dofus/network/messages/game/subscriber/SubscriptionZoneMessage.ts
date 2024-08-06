import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SubscriptionZoneMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8183;

	public active: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SubscriptionZoneMessage.protocolId;
    }

    public initSubscriptionZoneMessage(active: boolean = false): SubscriptionZoneMessage
    {
        this.active = active;
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
        this.serializeAs_SubscriptionZoneMessage(output);
    }

    public serializeAs_SubscriptionZoneMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.active);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SubscriptionZoneMessage(input);
    }

    private deserializeAs_SubscriptionZoneMessage(input: ICustomDataInput)
    {
        this._activeFunc(input);
    }

    private _activeFunc(input: ICustomDataInput)
    {
        this.active = input.readBoolean();
    }

}