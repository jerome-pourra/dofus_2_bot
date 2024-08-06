import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationUpdateFlagMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8455;

	public index: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NotificationUpdateFlagMessage.protocolId;
    }

    public initNotificationUpdateFlagMessage(index: number = 0): NotificationUpdateFlagMessage
    {
        this.index = index;
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
        this.serializeAs_NotificationUpdateFlagMessage(output);
    }

    public serializeAs_NotificationUpdateFlagMessage(output: ICustomDataOutput)
    {
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element index.");
        }
        output.writeVarShort(this.index);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NotificationUpdateFlagMessage(input);
    }

    private deserializeAs_NotificationUpdateFlagMessage(input: ICustomDataInput)
    {
        this._indexFunc(input);
    }

    private _indexFunc(input: ICustomDataInput)
    {
        this.index = input.readVarUhShort();
        if(this.index < 0)
        {
            throw new Error("Forbidden value (" + this.index + ") on element of NotificationUpdateFlagMessage.index.");
        }
    }

}